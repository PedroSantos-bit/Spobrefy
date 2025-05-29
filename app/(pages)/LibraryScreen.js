// LibraryScreen.js

import React from "react";
import ScreenMain from "../../src/Utils/ScreenMain";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const recentSearches = [
  {
    id: "1",
    title: "You (feat. Travis Scott)",
    type: "Song • Don Toliver",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "2",
    title: "John Wick: Chapter 4",
    type: "Album • Tyler Bates, Joel J. Richard",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "3",
    title: "Maroon 5",
    type: "Artist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "4",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "5",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "6",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "7",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "8",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "9",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
  {
    id: "10",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../../src/Img/favicon.png"),
  },
];

const togglePlayer = () => {
  setIsPlayerVisible(!isPlayerVisible);
  translateY.value = isPlayerVisible ? 1000 : 0; // Move o player para fora da tela ou para dentro
};

export default function LibraryScreen() {
  return (
    <ScreenMain
      progress={0}
      position={0}
      duration={1}
      showControls={false}
      showTime={false}
      showProgresso={false}
      showBorder={false}
      showTitle={false}
      soundRef={{ current: { playAsync: () => {} } }} // dummy ref só de exemplo
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchBarr}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="O que você quer ouvir?"
              style={styles.input}
              placeholderTextColor="#F7F7F7"
            />
            <Icon
              name="search"
              size={30}
              color="#f7F7F7"
              style={styles.searchIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Título */}
        <Text style={styles.sectionTitle}>Buscas recentes</Text>
        <View style={{ flex: 1, width: "100%" }}>
          <FlatList
            style={styles.scrum}
            data={recentSearches}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemRow}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemType}>{item.type}</Text>
                </View>
                {/* button do X */}
                <TouchableOpacity>
                  <Icon name="close" style={styles.buttonX} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Botão limpar */}
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar buscas recentes</Text>
        </TouchableOpacity>

        {/* Mini player fixo */}
        <BlurView intensity={50} tint="dark" style={styles.miniPlayer}>
          <Image
            source={require("../../src/Img/favicon.png")}
            style={styles.playerImage}
          />
          <TouchableOpacity onPress={togglePlayer} style={styles.Music}>
            <Link href="/MusicScreen">
              <View>
                <Text style={styles.playerTitle}>Inside Out</Text>
                <Text style={styles.playerSubtitle}>
                  The Chainsmokers, Charlee
                </Text>
              </View>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={30} color="#fff" />
          </TouchableOpacity>
        </BlurView>
      </View>
    </ScreenMain>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    width: "100%",
    backgroundColor: "#1C1C1E",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0,
    marginTop: -80,
  },
  searchBarr: {
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: -30,
  },
  input: {
    color: "#F7F7F7",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 5,
    flex: 1,
    borderWidth: 0,
    backgroundColor: "transparent",
    paddingVertical: 5,
    outlineStyle: "none",
    fontWeight: "bold",
  },
  searchIcon: {}, // vamos ver o que fazer depois
  sectionTitle: {
    color: "#F7F7F7",
    fontSize: 25,
    marginBottom: 5,
    fontWeight: "bold",
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  scrum: {
    //backgroundColor: "white",
    width: "100%", // caso preciso regular a rolagem
    flexGrow: 1,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#000000",
    width: "100%",
    justifyContent: "flex-end",
  },
  icon: {
    width: 48, // mudar o tamanho da imagem
    height: 48,
    borderRadius: 6,
    marginRight: 20,
  },
  textContainer: {
    width: "78%",
    gap: 5,
  },
  itemTitle: {
    color: "#F7F7F7",
    fontWeight: "bold",
    fontSize: 18,
  },
  itemType: {
    color: "#F7F7F7",
    fontSize: 18,
  },
  buttonX: {
    color: "#F7F7F7",
    fontSize: 35,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: "#0D0D0D",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 14,
    marginVertical: 120,
    marginTop: 10,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  miniPlayer: {
    flexDirection: "row",
    alignItems: "center",
    backdropFilter: "blur(10px)", // não afeta visualmente, mas boa prática em web
    backgroundColor: "rgba(0, 0, 0, 0.27)", // <- Preto com 40% de opacidade
    padding: 20,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 10,
    elevation: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 15,
  },
  playerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  playerSubtitle: {
    color: "#eee",
    fontSize: 16,
  },
  playButton: {
    marginLeft: "auto",
    padding: 10,
  },
});
