import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { auth } from "../firebase/public/firebase";
import { useRouter } from "expo-router";


WebBrowser.maybeCompleteAuthSession();

function LoginScreen() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  
  useEffect(() => {
    if (auth) {
      console.log("✅ Firebase conectado com sucesso!");
    } else {
      console.log("❌ Erro ao conectar com Firebase");
    }
  }, []);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "862395055773-lboub4kqa74ashkmi2tjnioi43d5n58b.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@pedro223/appmusica",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      Alert.alert("Login realizado!", `Token: ${authentication.accessToken}`);
    }
  }, [response]);

  const handleLogin = () => {
  if (!login || !password) {
    Alert.alert("Erro", "Preencha todos os campos.");
  } else if (login === "teste@gmail.com" && password === "09teste") {
    router.push("/HomeScreen"); // Redireciona para a tela HomeScreen
  } else {
    Alert.alert("Erro", "Nome de usuário ou senha incorretos.");
  }
};


  return (
    <LinearGradient colors={["#2f4f4f", "#2e8b57", "#3cb371", "#2f4f4f"]} style={styles.container}>
      <StatusBar style="light" backgroundColor="#2f4f4f" />

      <View style={styles.content}>
        <Image source={require("../assets/IconeApp.png")} style={styles.imageTitle} />
        <Text style={styles.titleApp}>Soft</Text>
      </View>

      <View style={styles.buttonConjunt}>
        <TouchableOpacity style={styles.buttonGoogle} onPress={() => promptAsync()}>
          <Image source={require("../assets/google-icon.png")} style={styles.googleIcon} />
          <Text style={styles.textButtonGoogle}>Login com o Google</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="E-mail ou nome de usuário"
          placeholderTextColor="#f7f7f7"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#f7f7f7"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonGoogleEnter} onPress={handleLogin}>
          <Text style={styles.textButtonEnter}>ENTRAR</Text>
        </TouchableOpacity>

            {/* Links adicionais */}
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity>
            <Link
              href={"/RedefinirScreen"}
              style={{
                borderBottomWidth: 1,
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
    marginTop: "20%",
    marginBottom: 30,
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
    width: "80%",
    alignItems: "center",
  },
  input: {
    color: "#fff",
    fontSize: 18,
    backgroundColor: "rgb(0,0,0)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 8,
    borderRadius: 10,
    width: "100%",
  },
  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    width: "100%",
    marginBottom: 12,
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
  },
  textButtonEnter: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textButtonRestauPass: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
