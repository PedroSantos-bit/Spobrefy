// src/hooks/useAuthentication.js
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
// import { SplashScreen } from 'expo-router'; // Removido daqui, RootLayout controla

export const useAuthentication = () => {
  console.log("useAuthentication: HOOK INICIALIZADO / RE-RENDERIZADO");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(() => {
    console.log("useAuthentication: useState de isLoading definindo para TRUE inicialmente");
    return true;
  });

  useEffect(() => {
    console.log("useAuthentication: useEffect EXECUTADO");
    const authInstance = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance, (firebaseUser) => {
      console.log("useAuthentication: onAuthStateChanged disparado. User:", firebaseUser ? firebaseUser.uid : null);
      setUser(firebaseUser);
      console.log("useAuthentication: onAuthStateChanged definindo isLoading para FALSE");
      setIsLoading(false);
    });

    return () => {
      console.log("useAuthentication: useEffect LIMPEZA (unsubscribe)");
      unsubscribe();
    };
  }, []); // Array de dependências vazio

  console.log("useAuthentication: RETORNANDO DO HOOK. isLoading:", isLoading, "User:", user ? user.uid : null);
  return { user, isLoading };
};