// api/diagnose.js
// Vercel Serverless Function to securely call the Google Gemini API

export default async function handler(req, res) {
  // Add CORS headers for preflight and standard requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { cropType, symptoms, description, images } = req.body;

  if (!cropType || !symptoms || !images || images.length === 0) {
    return res.status(400).json({ error: 'Missing required fields (cropType, symptoms, images)' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    console.error('Gemini API key is not configured in environment variables.');
    return res.status(500).json({ error: 'Gemini API key is not configured.' });
  }

  console.log('Image upload started (Received by Vercel serverless function)');
  console.log('AI diagnosis started for crop:', cropType);

  try {
    // We only send the first image to Gemini to save tokens and ensure single-image focus
    const imageDataUrl = images[0];
    const matches = imageDataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid image data URL format.');
    }

    const mimeType = matches[1];
    const base64Data = matches[2];

    const promptText = `You are an expert crop pathologist and agronomist. 
Analyze the provided crop leaf image, along with the following farmer-reported details:
- Crop Type: ${cropType}
- Symptoms Selected: ${symptoms.join(', ')}
- Farmer Description: ${description || 'No additional description provided.'}

Provide an AI-assisted preliminary diagnosis, possible causes, prevention tips, and fertilizer & treatment recommendations.
You MUST return ONLY a valid, raw JSON object matching this JSON schema exactly (do NOT wrap it in markdown blocks like \`\`\`json, return only the plain JSON string):
{
  "diseasePrediction": "Name of the crop disease or leaf problem diagnosed",
  "possibleCauses": "Brief description of the possible causes for this crop problem",
  "fertilizerRecommendation": "Fertilizer recommendation details (e.g. type, concentration, dosage, timing)",
  "organicTreatment": "Details of suitable organic treatment or natural remedies",
  "chemicalTreatment": "Details of suitable chemical treatment (if needed, otherwise N/A)",
  "preventionTips": "Tips to prevent this issue from recurring in the future",
  "confidence": "Estimated confidence percentage (e.g. 85%)"
}`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Data
                }
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API returned error status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText) {
      throw new Error('Empty response returned from Gemini API.');
    }

    // Clean up response string in case Gemini wrapped it in markdown code blocks
    let cleanJsonStr = candidateText.trim();
    if (cleanJsonStr.startsWith('```json')) {
      cleanJsonStr = cleanJsonStr.replace(/^```json/, '').replace(/```$/, '').trim();
    } else if (cleanJsonStr.startsWith('```')) {
      cleanJsonStr = cleanJsonStr.replace(/^```/, '').replace(/```$/, '').trim();
    }

    const result = JSON.parse(cleanJsonStr);
    
    console.log('AI diagnosis completed successfully');
    return res.status(200).json(result);

  } catch (err) {
    console.error('Gemini API call failed, running server-side fallback diagnosis:', err);

    // Fallback diagnosis engine structured with the new schema
    const hasYellow = symptoms.includes('yellow_leaves');
    const hasLeafSpots = symptoms.includes('leaf_spots') || symptoms.includes('brown_spots');
    const hasPest = symptoms.includes('pest_attack') || symptoms.includes('holes_leaves');
    const hasWilting = symptoms.includes('wilting') || symptoms.includes('dry_leaves');

    let fallbackResult = {
      diseasePrediction: "General Nutrient Lack Suspected",
      possibleCauses: "Depleted soil nutrients, lack of balanced fertilization, or watering drainage stress.",
      fertilizerRecommendation: "NPK 19-19-19 Soluble Fertilizer, dissolve 5g per Litre of water.",
      organicTreatment: "Apply well-decomposed organic farm manure or compost to improve soil structure.",
      chemicalTreatment: "Spray NPK 19-19-19 foliar spray in the early morning. Repeat every 14 days.",
      preventionTips: "Conduct periodic soil health test. Crop rotation with legumes to naturalize nitrogen levels.",
      confidence: "70%",
      isFallback: true
    };

    if (hasYellow) {
      if (cropType === 'Tomato') {
        fallbackResult.diseasePrediction = "Nitrogen deficiency suspected";
        fallbackResult.possibleCauses = "Insufficient nitrogen levels in the soil, heavy rainfall leaching nutrients, or soil compaction.";
        fallbackResult.fertilizerRecommendation = "Apply Urea 46% at 50kg per acre in two split doses.";
        fallbackResult.organicTreatment = "Apply composted steer manure, fish emulsion, or blood meal around the plant base.";
        fallbackResult.chemicalTreatment = "Broadcast Urea 46% on damp soil and irrigate lightly immediately.";
        fallbackResult.preventionTips = "Integrate cover crops such as alfalfa or clover in rotation cycles. Avoid over-watering.";
      } else if (cropType === 'Paddy') {
        fallbackResult.diseasePrediction = "Zinc & Nitrogen deficiency likely";
        fallbackResult.possibleCauses = "Alkaline soil pH binding zinc, continuous flooding, or low soil organic matter.";
        fallbackResult.fertilizerRecommendation = "Mix 10kg Zinc Sulphate 33% with 50kg Urea per acre.";
        fallbackResult.organicTreatment = "Apply green manure (like Dhaincha) before transplanting and use vermicompost.";
        fallbackResult.chemicalTreatment = "Broadcast the Zinc Sulphate and Urea blend evenly onto damp fields.";
        fallbackResult.preventionTips = "Allow the field to dry out briefly between irrigation cycles (Alternate Wetting and Drying).";
      } else {
        fallbackResult.diseasePrediction = "Nitrogen deficiency suspected";
        fallbackResult.possibleCauses = "Depleted nitrogen reserves in soil due to intensive farming or poor organic matter content.";
        fallbackResult.fertilizerRecommendation = "Apply Urea 46% near crop rows.";
        fallbackResult.organicTreatment = "Incorporate legume crop residues or apply compost tea.";
        fallbackResult.chemicalTreatment = "Apply side-dressing of Nitrogen-rich Urea fertilizer (40kg per acre).";
        fallbackResult.preventionTips = "Perform regular soil testing and balance nitrogen inputs based on crop stages.";
      }
    } else if (hasLeafSpots) {
      if (cropType === 'Tomato') {
        fallbackResult.diseasePrediction = "Early Blight Fungus suspected";
        fallbackResult.possibleCauses = "Alternaria solani fungal spores, high humidity, or wet leaf foliage from overhead watering.";
        fallbackResult.fertilizerRecommendation = "Apply balanced NPK to promote vigor, but avoid excess Nitrogen which creates tender leaves.";
        fallbackResult.organicTreatment = "Spray copper-based organic fungicides or use Neem oil formulations.";
        fallbackResult.chemicalTreatment = "Apply Mancozeb 75% WP (2.5g per Litre of water) or Chlorothalonil.";
        fallbackResult.preventionTips = "Prune lower leaves to enhance airflow. Water at the base (drip) rather than overhead.";
      } else {
        fallbackResult.diseasePrediction = "Fungal Pathogen infestation";
        fallbackResult.possibleCauses = "High humidity, overcrowded planting, or presence of infected plant debris.";
        fallbackResult.fertilizerRecommendation = "Apply Potassium-rich fertilizers to help build cell wall resistance.";
        fallbackResult.organicTreatment = "Spray with compost tea or dilute baking soda solutions.";
        fallbackResult.chemicalTreatment = "Spray Carbendazim 50% WP (2g per Litre of water) on foliage.";
        fallbackResult.preventionTips = "Practice clean weeding and destroy infected plant parts immediately. Space crops properly.";
      }
    } else if (hasPest) {
      if (cropType === 'Tomato') {
        fallbackResult.diseasePrediction = "Fruit Borer / Caterpillar attack";
        fallbackResult.possibleCauses = "Helicoverpa armigera moth laying eggs on young leaves and flowers.";
        fallbackResult.fertilizerRecommendation = "Maintain balanced nutrition to support recovery from pest defoliation.";
        fallbackResult.organicTreatment = "Apply Bacillus thuringiensis (Bt) formulation or spray Neem Oil (10000 ppm) with liquid soap.";
        fallbackResult.chemicalTreatment = "Spray Spinosad 45% SC (0.3ml per Litre of water) in the late evening.";
        fallbackResult.preventionTips = "Install pheromone traps to monitor adult moth activity. Plant marigold as a trap crop.";
      } else {
        fallbackResult.diseasePrediction = "Foliar Chewing Pest infestation";
        fallbackResult.possibleCauses = "Presence of larval caterpillars, beetles, or grasshoppers.";
        fallbackResult.fertilizerRecommendation = "Use balanced organic nutrients to help crop grow past pest leaf damage.";
        fallbackResult.organicTreatment = "Spray Neem oil 10000 ppm (5ml per Litre of water) directly underneath leaves.";
        fallbackResult.chemicalTreatment = "Apply broad-spectrum insect control like Cypermethrin or Lambda-Cyhalothrin.";
        fallbackResult.preventionTips = "Practice clean cultivation and clear wild weeds around the field edges.";
      }
    } else if (hasWilting) {
      fallbackResult.diseasePrediction = "Root Rot / Water drainage stress";
      fallbackResult.possibleCauses = "Excessive soil water logging, lack of proper drainage, or root-damaging Pythium/Phytophthora.";
      fallbackResult.fertilizerRecommendation = "Avoid direct granular fertilizers on damaged roots. Apply Humic Acid to soil.";
      fallbackResult.organicTreatment = "Drench soil with Trichoderma viride bio-fungicide (2kg mixed with compost per acre).";
      fallbackResult.chemicalTreatment = "Drench soil with Metalaxyl-Mancozeb blend around root zones.";
      fallbackResult.preventionTips = "Ensure well-raised nursery beds and clean irrigation channels to prevent water logging.";
    }

    const count = symptoms.length;
    if (count === 1) fallbackResult.confidence = "75%";
    else if (count === 2) fallbackResult.confidence = "85%";
    else fallbackResult.confidence = "92%";

    return res.status(200).json(fallbackResult);
  }
}
