import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function RedefinirScreen() {
  return (
    <LinearGradient
      colors={["#2f4f4f", "#2e8b57", "#3cb371", "#3cb371", "#2f4f4f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" backgroundColor="#2f4f4f" />

      {/*<Image
          source={require('./src/img/IconeApp.png')}
          style={styles.imageTitle}
        />*/}

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.titleApp}>Redefina sua senha</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonConjunt}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#f7f7f7"
          />
        </TouchableOpacity>

        {/* Mensagem de sucesso */}
        <Text style={styles.message}>
          Insira o endereço de e-mail vinculado à sua conta do Soft para receber
          um e-mail de redefinição de senha. Caso não encontre na caixa de
          entrada, confira também sua caixa de spam ou lixeira.
        </Text>

        {/* Botão Enviar */}
        <TouchableOpacity style={styles.buttonGoogleEnter}>
          <Link href="/Redefinir">
            <Text style={styles.textButtonEnter}>ENVIAR</Text>
          </Link>
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: "15%", // Jogamos todos os itens para cima ou para baixo
    marginBottom: 20, // Controla o espaço entre a imagem e os botões
  },
  titleApp: {
    color: "#F7F7F7",
    fontSize: 25,
    fontWeight: "bold",
    top: -90,
  },
  buttonConjunt: {
    width: "100%",
    alignItems: "center",
  },
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "80%",
    textAlign: "center",
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  buttonGoogleEnter: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    marginTop: 55,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  input: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    outlineStyle: "none", // web, só por precaução
    underlineColorAndroid: "transparent", // Android
  },
  message: {
    color: "#F7F7F7",
    top: 10,
    textAlign: "center",
    fontStyle: "italic",
    width: "85%",
    fontSize: 20,
  },
  textButtonEnter: {
    color: "#f7f7f7",
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
