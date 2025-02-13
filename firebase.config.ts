import { getAuth } from '@angular/fire/auth';
import { getFirestore } from '@angular/fire/firestore';

export { getAuth, getFirestore };





// import { initializeApp, getApps, provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { environment } from './environments/environment';

// export const firebaseConfig = environment.firebaseConfig;

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

// export const app = provideFirebaseApp(() => initializeApp(firebaseConfig));
// export const firestore = provideFirestore(() => getFirestore());
// export const auth = provideAuth(() => getAuth());