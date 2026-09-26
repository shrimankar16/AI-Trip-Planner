// AI Service - Google Gemini API
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

//  Main function to generate the trip
export async function generateTripWithAI(DYNAMIC_PROMPT) {
  const maxRetries = 3;
  const retryDelay = 5000; // 5 seconds

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🚀 Attempt ${attempt} of ${maxRetries} - Generating trip...`);
      console.log(`📝 Prompt: ${DYNAMIC_PROMPT.substring(0, 100)}...`);

      // Get the generative model
      const model = genAI.getGenerativeModel({ model: "gemini-3.7-flash" });

      // Generate content
      const result = await model.generateContent(DYNAMIC_PROMPT);
      const response = await result.response;
      const textResponse = response.text();

      console.log('✅ Response received from AI');
      console.log(`📄 Raw response length: ${textResponse.length} characters`);

      // CLEANING THE STRING: Remove Markdown JSON formatting if the AI includes it
      const cleanJson = textResponse.replace(/```json|```/g, '').trim();

      console.log('🔍 Cleaned JSON:', cleanJson.substring(0, 200) + '...');

      const parsed = JSON.parse(cleanJson);
      console.log('✨ Successfully parsed JSON response');

      return parsed;

    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error);
      console.error(`Error details:`, error.message);

      // Check if it's a rate limit or temporary error
      if (
        error.message?.includes('503') ||
        error.message?.includes('429') ||
        error.message?.includes('UNAVAILABLE') ||
        error.message?.includes('RESOURCE_EXHAUSTED') ||
        error.message?.includes('rate limit') ||
        error.message?.includes('overloaded')
      ) {
        if (attempt < maxRetries) {
          console.log(`⏳ Service busy. Retrying in ${retryDelay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          continue; // Try again
        } else {
          throw new Error('The AI service is currently overloaded. Please try again in a few minutes.');
        }
      }

      // For other errors, throw immediately
      console.error('💥 Fatal error - not retrying');
      throw error;
    }
  }
}
