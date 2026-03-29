export const AI_CONFIG = {
  // Primary Provider: Google Gen AI
  google: {
    apiKey: import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GOOGLE_GEN_AI_API_KEY,
    models: {
      primary: "gemini-3.1-flash-lite-preview",
      // Google Gen AI fallback: a fast secondary model suited for structured JSON output
      fallback: "gemini-2.5-flash",
    },
  },

  // Fallback Provider: OpenRouter
  openrouter: {
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
    endpoint: "https://openrouter.ai/api/v1/chat/completions",
    models: {
      default: "openrouter/free",
    },
  },
};
