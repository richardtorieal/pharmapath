# PharmaPath — API Integrations

## AI Integrations (Modular Architecture)

PharmaPath uses a multi-provider, multi-stage fallback approach to ensure reliable AI responses for the `DesignerScreen` analysis. The configuration for this is centralized in `src/config/ai.config.js` and the logic is handled by `src/services/ai.service.js`.

### 1. Google Gen AI (Primary Provider)
The application uses the official `@google/genai` library to request structured JSON responses.
- **Primary Model**: `gemini-3.1-flash-lite-preview`
- **Fallback Model**: `gemini-2.5-flash` (used if the primary model fails, e.g., due to rate limits or transient errors)

**Configuration:**
```bash
# .env.local
VITE_GEMINI_API_KEY=your_gemini_api_key
# Alternatively
VITE_GOOGLE_GEN_AI_API_KEY=your_gemini_api_key
```

### 2. OpenRouter (Fallback Provider)
If both models within the Google provider fail, the service will fall back to using OpenRouter via `fetch` as a secondary tracking provider.
- **Model**: `google/gemma-3-27b-it:free` (A free Gemma 3 model optimized for instruction following and structured outputs).

**Configuration:**
```bash
# .env.local
VITE_OPENROUTER_API_KEY=sk-or-v1-...
```

### Intended Use Case
1. User assembles a molecule via drag-and-drop in `DesignerScreen`.
2. User clicks "Analyze".
3. `ai.service.js` constructs the prompt and requests a JSON response conforming strictly to `ANALYSIS_SCHEMA`.
4. The service tries Google Gen AI (gemini-3.1-flash-lite-preview).
5. If it fails, it tries the Google Gen AI fallback (gemini-2.5-flash).
6. If the entire Google provider fails, it tries the OpenRouter fallback (gemma-3).
7. The parsed, validated JSON is displayed in the designer UI.

### Security Note
`VITE_` prefixed env vars are **bundled into the client-side JS** by Vite. Your API keys are visible in the browser. For production, consider:
- Using a backend proxy/service wrapper to keep the keys server-side
- Rate-limiting requests
- Setting strict quota limits and IP referrers for keys

---

## Firebase

Firebase is configured but **not actively used** in the application code. It exists as a deployment and potential future auth target.

### Configuration Files

**`.firebaserc`**
```json
{
  "projects": {
    "default": "pharmapath-app"
  }
}
```

**`firebase.json`**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
```

### Deployment via Firebase
```bash
npm run build
firebase deploy --only hosting
```

### Firebase Auth (not yet implemented)
Firebase is positioned to add authentication. Potential future use:
- Google OAuth login
- GitHub OAuth login
- Save user-created molecule designs
- Personalized drug notes or bookmarks

To add Firebase Auth, install the Firebase SDK and initialize it with the project config from the Firebase Console for `pharmapath-app`.

---

## No Other External APIs

The app has no other external API dependencies:
- Drug data is hardcoded in `src/constants.js`
- Molecule structures are hardcoded in `src/molecules.js`
- No analytics integration
- No error monitoring (Sentry, etc.)
- No CDN for fonts (Google Fonts loaded via CSS `@import` in styles)
