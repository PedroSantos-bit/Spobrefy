import { Text, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.textDireitos}>@Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    alignItems: "center",
  },
  textDireitos: {
    color: "#F7F7F7",
    fontWeight: "400",
  },
});
