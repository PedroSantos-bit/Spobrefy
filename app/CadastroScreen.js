import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function CadastroScreen() {
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
        <Image
          source={require("../assets/IconeApp.png")}
          style={styles.imageTitle}
        />
        <Text style={styles.titleApp}>
          Cadastre-se e curta suas músicas favoritas
        </Text>
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

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#f7f7f7"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#f7f7f7"
            secureTextEntry={true}
          />
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.buttonGoogleEnter}>
          <Link href="/HomeScreen">
          <Text style={styles.textButtonEnter}>CRIAR CONTA</Text>
          </Link>
        </TouchableOpacity>
      </View>

      {/* Footer Página Cadastro*/}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@Todos os direitos reservados.</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: "0%", // Jogamos todos os itens para cima ou para baixo
    marginBottom: 30, // Controla o espaço entre a imagem e os botões
  },
  imageTitle: {
    width: 130,
    height: 130,
    marginBottom: 30,
    top: -20,
  },
  titleApp: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: -15,
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
  buttonGoogleEnter: {
    backgroundColor: "rgba(0,0,0,0.9)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    marginTop: 20,
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
