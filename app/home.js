import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Login } from "./loginForm"; // Importando a função Login corretamente

function LoginScreen() {
  return (
    <LinearGradient
      colors={["#000114", "#00032b", "#010970", "#040fd4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Login />  {/* Aqui estamos chamando o componente Login */}
      
    </LinearGradient>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
