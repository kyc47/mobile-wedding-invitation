import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
    apiKey: "AIzaSyDRx_-OqCQGDZq4UbT6hr1gJPVhr2hahvY",
    authDomain: "wedding-1d63b.firebaseapp.com",
    databaseURL: "https://wedding-1d63b-default-rtdb.firebaseio.com",
    projectId: "wedding-1d63b",
    storageBucket: "wedding-1d63b.appspot.com",
    messagingSenderId: "548539539846",
    appId: "1:548539539846:web:9f8d1df35729347ec84c07"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
