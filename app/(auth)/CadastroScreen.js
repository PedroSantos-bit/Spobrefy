import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useRouter } from "expo-router";
import { registerUser } from "../../src/Utils/AuthOperations";

export default function CadastroScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); // Se quiser usa um nome de usuário separado
  const [password, setPassword] = useState("");
  const router = useRouter(); // Instância do router para navegação

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha o e-mail e a senha.");
      return;
    }
    try {
      const userCredential = await registerUser(email, password, username);
      console.log("Usuário cadastrado com sucesso:", userCredential.user);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace("/LoginScreen"); // Para que o usuário não volte para a tela de cadastro
    } catch (error) {
      // Os erros já vêm com mensagens amigáveis da função registerUser
      Alert.alert("Erro de Cadastro", error.message);
      console.error("Erro no cadastro:", error);
    }
  };

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
          source={require("../../src/Img/IconeApp.png")}
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
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" // Sugere teclado de e-mail
            autoCapitalize="none" // Desativa capitalização automática
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#f7f7f7"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#f7f7f7"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </TouchableOpacity>

        {/* Botão Criar Conta */}
        <TouchableOpacity
          style={styles.buttonGoogleEnter}
          onPress={handleRegister} // <-- Chama a função de cadastro
        >
          <Text style={styles.textButtonEnter}>CRIAR CONTA</Text>
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
