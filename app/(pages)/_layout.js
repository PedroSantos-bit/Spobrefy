// app/(main)/_layout.js
import { Tabs } from 'expo-router'; // Exemplo para navegação por abas (tabs)
// ou import { Stack } from 'expo-router'; para uma navegação empilhada principal

export default function PagesLayout() {
  return (
    <Tabs>
      {/* Configuração das suas abas */}
      <Tabs.Screen name="index" options={{ title: 'Home' }} /> {/* Sua tela Home */}
      <Tabs.Screen name="library" options={{ title: 'Biblioteca' }} />
      {/* etc. */}
    </Tabs>
    // OU
    // <Stack>
    //   <Stack.Screen name="index" options={{ headerShown: false }} />
    //   <Stack.Screen name="home" options={{ headerShown: false }} />
    //   {/* ... outras telas do grupo main */}
    // </Stack>
  );
}