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

Provide an AI-assisted preliminary diagnosis and fertilizer or treatment recommendation.
You MUST return ONLY a valid, raw JSON object matches this JSON schema exactly (do NOT wrap it in markdown block like \`\`\`json, return only the plain JSON string):
{
  "problem": "Name of the crop disease or leaf problem",
  "category": "Suggested fertilizer/chemical treatment category (e.g. Nitrogen-rich Fertilizer, Fungal Control)",
  "recommended": "Exact recommended brand/product/concentration (e.g. Urea 46%, Mancozeb 75% WP)",
  "usageNote": "Detailed instructions on dosage, timing, and application precautions",
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

    // Fallback diagnosis engine
    const hasYellow = symptoms.includes('yellow_leaves');
    const hasLeafSpots = symptoms.includes('leaf_spots') || symptoms.includes('brown_spots');
    const hasPest = symptoms.includes('pest_attack') || symptoms.includes('holes_leaves');
    const hasWilting = symptoms.includes('wilting') || symptoms.includes('dry_leaves');

    let fallbackResult = {
      problem: "General Nutrient Lack Suspected",
      category: "Balanced Fertilizer Guidance",
      recommended: "NPK 19-19-19 Soluble Fertilizer",
      usageNote: "Dissolve 5g per Litre of water and spray on the foliage. Repeat every 14 days.",
      confidence: "70%",
      isFallback: true
    };

    if (hasYellow) {
      if (cropType === 'Tomato') {
        fallbackResult.problem = "Nitrogen deficiency possible";
        fallbackResult.category = "Nitrogen-rich Fertilizer";
        fallbackResult.recommended = "Urea 46%";
        fallbackResult.usageNote = "Apply 50kg per acre in two split doses. Water lightly after application.";
      } else if (cropType === 'Paddy') {
        fallbackResult.problem = "Zinc & Nitrogen deficiency likely";
        fallbackResult.category = "Zinc & Nitrogen Nutrient Blend";
        fallbackResult.recommended = "Zinc Sulphate 33% & Urea";
        fallbackResult.usageNote = "Mix 10kg Zinc Sulphate with 50kg Urea per acre and broadcast evenly.";
      } else {
        fallbackResult.problem = "Nitrogen deficiency suspected";
        fallbackResult.category = "Nitrogen Fertilizer";
        fallbackResult.recommended = "Urea 46%";
        fallbackResult.usageNote = "Apply 40kg per acre near crop rows. Ensure sufficient soil moisture.";
      }
    } else if (hasLeafSpots) {
      if (cropType === 'Tomato') {
        fallbackResult.problem = "Early Blight Fungus suspected";
        fallbackResult.category = "Fungal Foliage Disease Control";
        fallbackResult.recommended = "Mancozeb 75% WP";
        fallbackResult.usageNote = "Mix 2.5g per Litre of water and spray thoroughly on foliage.";
      } else {
        fallbackResult.problem = "Fungal Pathogen infestation";
        fallbackResult.category = "Broad-Spectrum Systemic Fungicide";
        fallbackResult.recommended = "Carbendazim 50% WP";
        fallbackResult.usageNote = "Mix 2g per Litre of water and spray on foliage.";
      }
    } else if (hasPest) {
      if (cropType === 'Tomato') {
        fallbackResult.problem = "Fruit Borer / Caterpillar attack";
        fallbackResult.category = "Targeted Insecticide Control";
        fallbackResult.recommended = "Spinosad 45% SC";
        fallbackResult.usageNote = "Mix 0.3ml per Litre of water. Spray in late evening.";
      } else {
        fallbackResult.problem = "Foliar Chewing Pest infestation";
        fallbackResult.category = "Botanical Pest Control";
        fallbackResult.recommended = "Neem Oil 10000 ppm";
        fallbackResult.usageNote = "Mix 5ml per Litre of water with 1ml liquid soap. Spray underneath leaves.";
      }
    } else if (hasWilting) {
      fallbackResult.problem = "Root Rot / Water drainage stress";
      fallbackResult.category = "Soil Conditioner & Stimulant";
      fallbackResult.recommended = "Humic Acid 98%";
      fallbackResult.usageNote = "Drench soil with 2g Humic Acid per Litre of water to repair plant root hairs.";
    }

    const count = symptoms.length;
    if (count === 1) fallbackResult.confidence = "75%";
    else if (count === 2) fallbackResult.confidence = "85%";
    else fallbackResult.confidence = "92%";

    return res.status(200).json(fallbackResult);
  }
}
