// src/firebase/firebase.js
import {
  initializeApp,
  getApps,
  getApp as getFirebaseApp,
} from "@react-native-firebase/app";
// Não precisamos mais de 'import @react-native-firebase/auth;' para efeito colateral aqui.

// Suas configurações do Firebase (mantenha as suas)
const firebaseConfig = {
  apiKey: "AIzaSyAr5JvCJWfgzzfCnjCVqGamZajwS7TLgX8",
  authDomain: "soft-music-6ef73.firebaseapp.com",
  projectId: "soft-music-6ef73",
  storageBucket: "soft-music-6ef73.firebasestorage.app",
  messagingSenderId: "966720969751",
  appId: "1:966720969751:web:449d12f2da82cc84991052",
  // measurementId: "SEU_MEASUREMENT_ID" // Opcional
};

let app;

// Verifica se já existem apps inicializados
if (!getApps().length) {
  // Se não, inicializa o app com suas configurações
  app = initializeApp(firebaseConfig);
} else {
  // Se sim, pega a instância do app padrão já inicializado
  // (Isso é útil se a inicialização nativa já ocorreu, por exemplo, via google-services.json)
  app = getFirebaseApp();
}

// Você pode exportar a instância do app se precisar dela em outros lugares,
// mas muitas vezes você importará e usará 'getAuth', 'getFirestore', etc., diretamente nos arquivos onde são necessários.
// Por enquanto, vamos exportar 'app' para que o hook de autenticação possa usá-lo se necessário,
// ou podemos simplificar depois.
export default app;
