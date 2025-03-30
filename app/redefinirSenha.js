import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Redefinir } from "./loginForm"; // Importando a função Login corretamente

function RedefinirSenha() {
  return (
    <LinearGradient
      colors={["#000114", "#00032b", "#010970", "#040fd4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Redefinir /> {/* Aqui estamos chamando o componente Redefinir */}
    </LinearGradient>
  );
}

export default RedefinirSenha;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
