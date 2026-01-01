
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const getEarthInsight = async (topic: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Earth scientist and storyteller. Provide a fascinating, concise (max 150 words), and professional insight about: ${topic}. Structure it with a creative title and a paragraph of deep knowledge. Focus on either the majesty of nature, geological wonders, or climate interconnectivity.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Earth holds secrets beyond our current understanding. Please try another topic.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Archive is temporarily inaccessible. The whispers of the Earth are silent for a moment.";
  }
};

export const getEcosystemDeepDive = async (ecosystemName: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Describe the ${ecosystemName} in a way that highlights its critical role in Earth's survival. Include one surprising fact. Return as a clean text block.`,
    });

    return response.text;
  } catch (error) {
    return "Failed to fetch ecosystem data.";
  }
};
