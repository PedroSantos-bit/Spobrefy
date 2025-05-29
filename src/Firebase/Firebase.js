import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
// import '@react-native-firebase/firestore'; // Se você usa Firestore


const firebaseConfig = {
  apiKey: "AIzaSyAr5JvCJWfgzzfCnjCVqGamZajwS7TLgX8",
  authDomain: "soft-music-6ef73.firebaseapp.com",
  projectId: "soft-music-6ef73",
  storageBucket: "soft-music-6ef73.firebasestorage.app",
  messagingSenderId: "966720969751",
  appId: "1:966720969751:web:449d12f2da82cc84991052"
  //measurementId: "SEU_MEASUREMENT_ID" // Opcional, se usar Google Analytics
};

// Inicializa o Firebase APENAS se ele ainda não tiver sido inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
