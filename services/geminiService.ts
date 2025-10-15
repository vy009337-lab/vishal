
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateMotivationalQuote = async (): Promise<string> => {
  if (!API_KEY) {
    return "The journey of a thousand miles begins with a single step. - Lao Tzu (API Key not configured)";
  }
  
  try {
    const prompt = `Generate a short, powerful, and motivational quote about the virtues of self-discipline, inner strength, and celibacy (Brahmacharya). The quote should be inspiring and encouraging.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating motivational quote:", error);
    return "Control your mind and you will conquer your world. - A wise saying";
  }
};
