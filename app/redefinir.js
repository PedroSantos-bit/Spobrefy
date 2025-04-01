import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function Redefinir() {
  return (
    <LinearGradient
      colors={["black", "#00032b", "#010970", "#040fd4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      
      <StatusBar style="dark" />

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.titleApp}>ALTERAÇÃO DE SENHA</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonConjunt}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Text style={styles.textButtonGoogle}>E-mail</Text>
        </TouchableOpacity>

        {/* Botão Enviar */}
        <TouchableOpacity style={[styles.buttonGoogleEnter, { backgroundColor: "#05d8f0" }]}>
          <Text style={styles.textButtonEnter}>ENVIAR</Text>
        </TouchableOpacity>

        {/* Mensagem de sucesso */}
        <Text style={styles.message}>* Você receberá um email para redefinir sua senha. Verifique também sua caixa de Spam e Lixeira.</Text>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@Todos os direitos reservados.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Garante que o rodapé fique no final
    alignItems: "center",
    paddingVertical: 20,
  },
  content: {
    alignItems: "center",
    marginTop: "35%",
  },
  titleApp: {
    color: "#05d8f0",
    fontSize: 32,
    fontWeight: "bold",
    top: 50
  },
  buttonConjunt: {
    alignItems: "center",
    width: "100%",
  },
  buttonGoogle: {
    backgroundColor: "#262a85",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    margin: 10,
  },
  buttonGoogleEnter: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  textButtonGoogle: {
    color: "#fff",
    fontSize: 16,
  },
  textButtonEnter: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    marginTop: 30,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 0,
  },
  footerText: {
    fontSize: 14,
    color: "white",
  },
});
