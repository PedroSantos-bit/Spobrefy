import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Animated, { FadeInUp } from "react-native";
import ScreenMain from "./src/components/ScreenMain";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const [image, setImage] = useState(null);

  async function pickImage() {
    // Pede permissão para acessar a galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a galeria é necessária!");
      return;
    }

    // Abre a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <ScreenMain
      showControls={false}
      showTime={false}
      showProgresso={false}
      showBorder={false}
      showTitle={false}
      showAvatar={false}
    >
      <View style={styles.containerProfile}>
        {/* Título da tela */}
        <Text style={styles.titleProfile}>Editar Perfil</Text>

        {/* Avatar com ícone de edição */}
        <View style={styles.containerAvatar}>
          {/* Se tiver imagem, mostra ela, senão mostra ícone */}
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <Ionicons name="person-circle" size={125} color="#FFFFFF" />
          )}

          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Ionicons name="camera" size={35} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Inputs de Nome, Email, Senha */}
        <View style={styles.containerInput}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Alterar nome"
            placeholderTextColor="#CCC"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Alterar E-mail"
            placeholderTextColor="#CCC"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Alterar senha"
            placeholderTextColor="#CCC"
            secureTextEntry // Deixa o texto da senha oculto
          />
        </View>

        {/* Botões */}
        <TouchableOpacity style={styles.buttonDelete}>
          <Text style={styles.buttonText}>Excluir conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonExit}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScreenMain>
  );
}

const styles = StyleSheet.create({
  containerProfile: {
    flex: 1,

    paddingHorizontal: 20,

    justifyContent: "flex-start",
  },
  titleProfile: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  containerAvatar: {
    position: "relative",
    alignItems: "center",
    marginBottom: 30,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 240 / 2 - 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 5,
  },
  containerInput: {
    width: "100%",

    //backgroundColor: "#ffff",
  },
  label: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 10, // adiciona espaço entre inputs
    textAlign: "left",
  },
  buttonDelete: {
    backgroundColor: "#000000",
    paddingVertical: 12,

    borderRadius: 12,

    width: "80%",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  buttonExit: {
    backgroundColor: "#000000",
    paddingVertical: 12,

    borderRadius: 12,
    marginTop: 15,
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
  },
});
