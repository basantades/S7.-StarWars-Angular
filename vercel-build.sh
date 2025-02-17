#!/bin/bash
echo "Creando environment.ts en Vercel..."

cat <<EOT > src/environments/environment.ts
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '${NG_APP_FIREBASE_API_KEY}',
    authDomain: '${NG_APP_FIREBASE_AUTH_DOMAIN}',
    projectId: '${NG_APP_FIREBASE_PROJECT_ID}',
    storageBucket: '${NG_APP_FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${NG_APP_FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${NG_APP_FIREBASE_APP_ID}'
  }
};
EOT