import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      {/* Oculta o cabeçalho para as telas de autenticação */}
      <Stack.Screen name="LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen name="CadastroScreen" options={{ headerShown: false }} />
      <Stack.Screen name ="RedefinirScreen" options={{ headerShown: false }} />
      {/* Adicione outras telas do seu grupo de auth aqui */}
    </Stack>
  );
}