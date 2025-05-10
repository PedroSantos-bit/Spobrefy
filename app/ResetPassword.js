import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function ResetPassword() {
  return (
    <LinearGradient
      colors={["#2f4f4f", "#2e8b57", "#3cb371", "#3cb371", "#2f4f4f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" backgroundColor="#2f4f4f" />

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Imagem e título fixos */}
        <Text style={styles.titleApp}>Redefina sua senha</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonConjunt}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            placeholderTextColor="#f7f7f7"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar nova senha"
            placeholderTextColor="#f7f7f7"
          />
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.buttonGoogleEnter}>
          <Link href="/LoginScreen">
            <Text style={styles.textButtonEnter}>ALTERAR SENHA</Text>
          </Link>
        </TouchableOpacity>
      </View>

      {/* Footer Página CadastroScreen*/}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@Todos os direitos reservados.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: "20%", // Jogamos todos os itens para cima ou para baixo
    marginBottom: 30, // Controla o espaço entre a imagem e os botões
  },
  titleApp: {
    color: "#F7F7F7",
    fontSize: 25,
    fontWeight: "bold",
    top: -80,
  },
  buttonConjunt: {
    width: "100%",
    alignItems: "center",
  },
  buttonGoogle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "80%",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  input: {
    color: "#fff",
    fontSize: 16,
    textAlign: "left",
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    outlineStyle: "none", // web, só por precaução
    underlineColorAndroid: "transparent", // Android
  },
  buttonGoogleEnter: {
    backgroundColor: "rgba(0,0,0,0.9)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "40%",
    marginTop: 20,
    alignItems: "center",
  },
  textButtonEnter: {
    color: "#F7F7F7",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute", // Mantém fixo no rodapé
    bottom: 0, // Sempre no final da tela
    width: "100%", // Ocupa toda a largura
    padding: 13,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    color: "#F7F7F7",
  },
});
