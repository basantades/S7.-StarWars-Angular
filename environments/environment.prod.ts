// export const environment = {
//     production: false,

//  firebaseConfig: {

//     apiKey: process.env['NG_APP_FIREBASE_API_KEY'],
//     authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'],
//     projectId: process.env['NG_APP_FIREBASE_PROJECT_ID'],
//     storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'],
//     messagingSenderId: process.env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'],
//     appId: process.env['NG_APP_FIREBASE_APP_ID']
// }
    
//   };


export const environment = {
  production: true,

  firebaseConfig: {
    apiKey: (process.env as Record<string, string>)["NG_APP_FIREBASE_API_KEY"],
    authDomain: (process.env as Record<string, string>)["NG_APP_FIREBASE_AUTH_DOMAIN"],
    projectId: (process.env as Record<string, string>)["NG_APP_FIREBASE_PROJECT_ID"],
    storageBucket: (process.env as Record<string, string>)["NG_APP_FIREBASE_STORAGE_BUCKET"],
    messagingSenderId: (process.env as Record<string, string>)["NG_APP_FIREBASE_MESSAGING_SENDER_ID"],
    appId: (process.env as Record<string, string>)["NG_APP_FIREBASE_APP_ID"]
  }
};

  