import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "./loginForm"; // Importando o formulário

export default function Cadastro() {
  const fields = ["Nome Completo", "E-mail", "Senha", "Confirmar Senha"];

  return (
    <LinearGradient
      colors={["#000114", "#00032b", "#010970", "#040fd4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      

      <LoginForm
         showGoogleButton={false} // Ocultar botão do Google se necessário
         showSeparator={false} // Ocultar separador se necessário
         inputFields={Cadastro} // Passando os campos para LoginForm
      />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
