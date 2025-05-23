import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
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
import { Link } from "expo-router";

export default function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  // Algumas imagens de avatar prontas
  const imageOptions = [
    require("./src/img/IconeApp.png"),
    require("./src/img/PerfilOne.jpeg"),
    require("./src/img/PerfilTwo.jpeg"),
    require("./src/img/PerfilThree.jpeg"),
    require("./src/img/PerfilFour.jpeg"),
    require("./src/img/PerfilFive.jpeg"),
  ];

  const handleSelectImage = (uri) => {
    setImage(uri);
    setShowOptions(false);
  };

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
          <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
            {/* Se tiver imagem, mostra ela, senão mostra ícone */}
            {image ? (
              <Image
                source={typeof image === "string" ? { uri: image } : image}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Ionicons name="person-circle" size={125} color="#FFFFFF" />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <Ionicons name="camera" size={35} color="#000" />
          </TouchableOpacity>

          {/* Mostrar opções de imagem ao clicar no avatar */}
          {showOptions && (
            <View style={styles.imageOptionsContainer}>
              {imageOptions.map((uri, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectImage(uri)}
                >
                  <Image
                    source={typeof uri === "string" ? { uri } : uri}
                    style={styles.optionImage}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Inputs de Nome, Email, Senha */}
        <View style={styles.containerInput}>
          <TouchableOpacity style={styles.containerInput}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Alterar nome"
              placeholderTextColor="#CCC"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerInput}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Alterar E-mail"
              placeholderTextColor="#CCC"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerInput}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Alterar senha"
              placeholderTextColor="#CCC"
              secureTextEntry // Deixa o texto da senha oculto
            />
          </TouchableOpacity>
        </View>

        {/* Botões */}
        <TouchableOpacity style={styles.buttonDelete}>
          <Link href="/LoginScreen">
            <Text style={styles.buttonText}>Excluir conta</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonExit}>
          <Link href="/LoginScreen">
            <Text style={styles.buttonText}>Sair</Text>
          </Link>
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
    paddingTop: 0,
  },
  titleProfile: {
    fontSize: 35,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  containerAvatar: {
    position: "relative",
    alignItems: "center",
    marginBottom: 70,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 240 / 1 - 10, //controla a posição da camera
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 5,
  },
  imageOptionsContainer: {
    position: "absolute",
    top: 125, // move altura dos icones avatar
    padding: 20,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  optionImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#FFF",
  },

  containerInput: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    underlineColorAndroid: "transparent", // Android
    outlineStyle: "none", // web, só por precaução
  },
  label: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "left", // move o texto para a esquerda
    alignSelf: "flex-start", // garante que o Text não fique centralizado horizontalmente
    marginLeft: "5%", // opcional: controla a margem da esquerda
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.9)",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 20,
    width: "90%",
    marginBottom: 5, // adiciona espaço entre inputs
    textAlign: "left",
  },
  buttonDelete: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    marginTop: 15,
    borderRadius: 12,

    width: "50%",
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
    marginTop: 10,
    width: "30%",
    alignItems: "center",
    alignSelf: "center",
  },
});
