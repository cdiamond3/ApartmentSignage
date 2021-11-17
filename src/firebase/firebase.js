import { initializeApp } from "firebase/app";


export default function firebaseImageUpload() {
  const firebaseConfig = {
    apiKey: "AIzaSyB2CUDpQE5u_yKXRtJV0SJHrCDHMGVSWLI",
    authDomain: "ump-signage-official.firebaseapp.com",
    projectId: "ump-signage-official",
    storageBucket: "ump-signage-official.appspot.com",
    messagingSenderId: "634236241849",
    appId: "1:634236241849:web:87274c19210a3a61a8d868",
    measurementId: "G-8XN961N6LZ",
  };
  
  const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
}
