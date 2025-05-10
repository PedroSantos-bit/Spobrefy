import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Link } from "expo-router";
import { auth } from "../firebase/public/firebase";

WebBrowser.maybeCompleteAuthSession();

function LoginScreen() {
  useEffect(() => {
    if (auth) {
      console.log("✅ Firebase conectado com sucesso!");
    } else {
      console.log("❌ Erro ao conectar com Firebase");
    }
  }, []);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "862395055773-lboub4kqa74ashkmi2tjnioi43d5n58b.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@pedro223/appmusica",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      Alert.alert("Login realizado!", `Token: ${authentication.accessToken}`);
      console.log(authentication);
    }
  }, [response]);

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

        <Text style={styles.titleApp}>Soft</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonConjunt}>
        <TouchableOpacity
          style={styles.buttonGoogle}
          onPress={() => promptAsync()}
        >
          <Image
            source={require("../assets/google-icon.png")}
            style={[styles.googleIcon, { marginRight: 40 }]}
          />
          <Text style={styles.textButtonGoogle}>Login com o Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="E-mail ou nome de usuário"
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
          <Link href={"/HomeScreen"}>
            <Text style={styles.textButtonEnter}>ENTRAR</Text>
          </Link>
        </TouchableOpacity>

        {/* Links adicionais */}
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity>
            <Link
              href={"/RedefinirScreen"}
              style={{
                borderBottomWidth: 0.8,
                borderBottomColor: "white",
                alignSelf: "center",
              }}
            >
              <Text style={[styles.textButtonRestauPass]}>
                Esqueceu sua senha?
              </Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20 }}>
            <Link href={"/CadastroScreen"}>
              <Text style={styles.textButtonRestauPass}>
                Não tem uma conta? C͟a͟d͟a͟s͟t͟r͟e͟-s͟e͟
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default LoginScreen;

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
  imageTitle: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  titleApp: {
    color: "white",
    fontSize: 38,
    fontWeight: "bold",
  },
  buttonConjunt: {
    width: "100%",
    alignItems: "center",
  },
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "80%",
    textAlign: "center",
    margin: 10,
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
  textButtonGoogle: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
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
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textButtonRestauPass: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
