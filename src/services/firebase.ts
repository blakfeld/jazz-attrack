import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  appId: process.env.REACT_APP_DB_APP_ID,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseUrl: process.env.REACT_APP_FB_DB_URL,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
};
firebase.initializeApp(config);

export const store = firebase.firestore();
