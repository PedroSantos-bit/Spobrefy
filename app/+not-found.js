import { Stack, Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      {/* Define as opções de cabeçalho para esta tela específica */}
      <Stack.Screen options={{ title: 'Oops! Não encontrado' }} />

      <View style={styles.container}>
        <Text style={styles.title}>Página não encontrada!</Text>
        <Text style={styles.subtitle}>
          Esta tela não existe.
        </Text>

        {/* Link para voltar para a página inicial */}
        <Link href="/LoginScreen" style={styles.link}>
          <Text style={styles.linkText}>Voltar para a página inicial</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#3cb371', // Sua cor de tema
    borderRadius: 8,
  },
  linkText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});