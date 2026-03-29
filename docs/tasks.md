# PharmaPath — Tasks and Backlog

## Current / Recent Enhancements (Completed)
- **AI Service Abstraction Layer**: 
  - Created a unified `src/config/ai.config.js` and `src/services/ai.service.js`.
  - Moved away from inline `fetch` calls scattered inside React UI components.
  - Implemented 2-stage AI provider fallback:
    1. **Primary Provider: Google Gen AI**
       - Model 1: `gemini-3.1-flash-lite-preview`
       - Model 2 (Fallback): `gemini-2.5-flash`
    2. **Secondary Provider: OpenRouter**
       - Model (Fallback): `google/gemma-3-27b-it:free`
  - Integrated the official `@google/genai` library client.
  - Updated `DesignerScreen.jsx` to natively use `analyzeDrugComponents()` function.
- **Documentation**: Updated `api-integrations.md` and `architecture.md` to map out the new structure. 

## Active Development
- Add proper global error handling context to catch unhandled errors from `ai.service.js` outside of the local screen context.
- Improve the Designer UI state to show visual feedback when falling back to a secondary AI model.

## Backlog / Future Tasks
- Add a proxy backend to hide `VITE_GEMINI_API_KEY` and `VITE_OPENROUTER_API_KEY` from the client-side JavaScript bundle for production security.
- Persist user "saved drug designs" using Firebase Authentication and Firestore.
- Add additional molecules and atoms to the `constants.js` hardcoded list.
- Allow swapping AI models in the UI for comparison test runs.
- Set up unit testing for `ai.service.js` using mocking for the GoogleGenAI and fetch requests.
