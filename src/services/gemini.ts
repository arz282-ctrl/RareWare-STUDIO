import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getRecoveryInsight(progressData: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a supportive recovery coach. Based on the following weekly progress data (mood scores from 0-100), provide a short, encouraging, and insightful message (max 2 sentences) to the user.
              Data: ${JSON.stringify(progressData)}
              
              Focus on trends, consistency, or a specific high/low point if relevant. Be empathetic and professional.`
            }
          ]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "Keep moving forward, one step at a time. Your journey is unique and valuable.";
  } catch (error) {
    console.error("Error generating recovery insight:", error);
    return "Your progress is inspiring. Continue to focus on your daily anchors and celebrate every victory.";
  }
}
