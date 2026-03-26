PharmaPath - PWA setup

Local dev:

  npm install
  npm run dev

Build:

  npm run build
  npm run preview

Deploy to Vercel:
- `vercel` (auto-detects Vite projects). No extra config required.

Deploy to Firebase Hosting:
- Install Firebase CLI: `npm install -g firebase-tools`
- Login: `firebase login`
- Set project: `firebase use --add`
- Deploy: `firebase deploy --only hosting`

Notes:
- The app includes `manifest.webmanifest` and `sw.js` for basic offline caching.
- Replace `your-project-id` in `.firebaserc` with your Firebase project id before deploying.
