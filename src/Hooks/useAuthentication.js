import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth'; // instância de autenticação do Firebase
import { SplashScreen } from 'expo-router'; // SplashScreen do expo-router

export const useAuthentication = () => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar se o carregamento inicial da autenticação está completo

  useEffect(() => {

    // Este observador é chamado sempre que o estado de login do usuário muda (login, logout, etc.)
    const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser); // Atualiza o estado do usuário
      setIsLoading(false);    // Indica que o carregamento inicial do estado de autenticação terminou
      // Esconde a tela de splash
      SplashScreen.hideAsync();
    });

    // Retorna uma função de limpeza para cancelar a inscrição
    return () => unsubscribe();
  }, []); // O array vazio garante que useEffect rode apenas uma vez 

  // Retorna o estado do usuário e o status de carregamento
  return {
    user,
    isLoading
  };
};