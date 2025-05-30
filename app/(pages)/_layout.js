// app/(main)/_layout.js
//import { Tabs } from 'expo-router'; // Exemplo para navegação por abas (tabs)
import { Stack } from 'expo-router'; //para uma navegação empilhada principal

export default function PagesLayout() {
  return (
     <Stack>
       <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
       <Stack.Screen name="FavoriteScreen" options={{ headerShown: false }} />
       {/* ... outras telas do grupo main */}
     </Stack>
  );
}

