import { Stack, Redirect, SplashScreen } from "expo-router";
//import auth from '@react-native-firebase/auth'; // Necessário para o hook useAuthentication
import "../src/Firebase/Firebase"; // Este import executa o código de inicialização do Firebase

SplashScreen.preventAutoHideAsync();

import { useAuthentication } from "../src/Hooks/useAuthentication"; // <--- Importe hook de autentificação

export default function RootLayout() {
  const { user, isLoading } = useAuthentication(); // obter o estado do usuário e o status de carregamento

  // Enquanto o estado de autenticação está sendo determinado, não renderize nada
  if (isLoading) {
    return null;
  }

  // Lógica de Redirecionamento:
  // Se o usuário NÃO estiver logado, redirecione-o para a rota de login dentro do grupo (auth)
  if (!user) {
    return <Redirect href="/LoginScreen" />;
  }

  // Se o usuário ESTIVER logado (e isLoading for false), renderize o Stack principal
  return (
    <Stack>
      {/* Define a tela para o grupo de navegação principal.*/}
      <Stack.Screen name="(pages)" options={{ headerShown: false }} />

      {/* Define a tela para o grupo de autenticação.*/}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      {/* para rotas que não correspondem a nada */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
