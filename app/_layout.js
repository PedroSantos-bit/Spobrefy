// app/_layout.js
import { Stack, SplashScreen, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "../src/firebase/firebase";
import { useAuthentication } from "../src/hooks/useAuthentication";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { user, isLoading } = useAuthentication();
  const router = useRouter(); // Hook para navegação imperativa
  const segments = useSegments(); // Hook para obter os segmentos da rota atual

  console.log("RootLayout -> isLoading:", isLoading, "User:", user ? user.uid : null, "Segments:", segments.join('/'));

  useEffect(() => {
    console.log("RootLayout useEffect -> Entrou. isLoading:", isLoading, "User:", !!user);
    if (isLoading) {
      console.log("RootLayout useEffect -> Ainda carregando, sem ação de redirect.");
      return; // Não faça nada até que o carregamento da autenticação termine
    }

    const inAuthGroup = segments[0] === '(auth)'; // Verifica se a rota atual está dentro do grupo (auth)

    if (!user && !inAuthGroup) {
      // Se NÃO há usuário E NÃO estamos no grupo de autenticação (ex: /LoginScreen )
      // então redireciona para a tela de login/autenticação.
      const authRoute = "/(auth)/LoginScreen"; 
      console.log(`RootLayout useEffect -> Usuário NÃO logado e NÃO está no grupo auth. Redirecionando para ${authRoute}`);
      router.replace(authRoute); 
    } else if (user && inAuthGroup) {
      // Se HÁ usuário E estamos no grupo de autenticação (ex: acabou de logar)
      // então redireciona para a tela principal do app.
      const homeRoute = "/(pages)/HomeScreen"; 
      console.log(`RootLayout useEffect -> Usuário LOGADO e ESTAVA no grupo auth. Redirecionando para ${homeRoute}`);
      router.replace(homeRoute);
    } else {
      console.log("RootLayout useEffect -> Nenhuma condição de redirect imediato atendida ou já está na tela correta.");
    }

    SplashScreen.hideAsync();

  }, [isLoading, user, segments, router]); // Dependências do useEffect


  if (isLoading) {
    console.log("RootLayout render -> isLoading é true, retornando null.");
    return null;
  }

  // Se não estiver carregando, mas o useEffect ainda não redirecionou (ou não precisa),
  // renderiza o Stack. O SplashScreen.hideAsync() é chamado no useEffect.
  // Se isLoading for false e o useEffect já tiver redirecionado, esta renderização
  // será da nova rota.
  console.log("RootLayout -> Renderizando Stack. isLoading é false.");
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(pages)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}