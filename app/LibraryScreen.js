// LibraryScreen.js

import React from "react";
import ScreenMain from "./src/components/ScreenMain";
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
    icon: require("../assets/favicon.png"),
  },
  {
    id: "2",
    title: "John Wick: Chapter 4",
    type: "Album • Tyler Bates, Joel J. Richard",
    icon: require("../assets/favicon.png"),
  },
  {
    id: "3",
    title: "Maroon 5",
    type: "Artist",
    icon: require("../assets/favicon.png"),
  },
  {
    id: "4",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("../assets/favicon.png"),
  },
];

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
        <View style={styles.searchBar}>
          <TextInput
            placeholder="O que você quer ouvir?"
            style={styles.input}
            placeholderTextColor="#F7F7F7"
          />
          <Icon
            name="search"
            size={22}
            color="#f7F7F7"
            style={styles.searchIcon}
          />
        </View>

        {/* Título */}
        <Text style={styles.sectionTitle}>Buscas recentes</Text>

        <FlatList
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

        {/* Botão limpar */}
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar buscas recentes</Text>
        </TouchableOpacity>

        {/* Mini player fixo */}
        <View style={styles.miniPlayer}>
          <Image
            source={require("../assets/favicon.png")}
            style={styles.playerImage}
          />
          <View>
            <Text style={styles.playerTitle}>Inside Out</Text>
            <Text style={styles.playerSubtitle}>The Chainsmokers, Charlee</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
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
    width: "80%",
    backgroundColor: "#1C1C1E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0,
    marginTop: "-40%",
  },
  input: {
    color: "#F7F7F7",
    fontSize: 18,
    textAlign: "left",
    paddingVertical: 5,
    flex: 1,
    borderWidth: 0,
    backgroundColor: "transparent",
    paddingVertical: 5,
    outlineStyle: "none",
  },
  searchIcon: {}, // vamos ver o que fazer depois
  sectionTitle: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#FF0000",
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
    width: "67%",
    gap: 5,
  },
  itemTitle: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
  },
  itemType: {
    color: "#000000",
    fontSize: 15,
  },
  buttonX: {
    color: "#F7F7F7",
    fontSize: 30,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: "#0D0D0D",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 14,
    marginVertical: 85,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  miniPlayer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00B894",
    padding: 12,
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  playerImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  playerTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  playerSubtitle: {
    color: "#eee",
    fontSize: 12,
  },
  playButton: {
    marginLeft: "auto",
  },
});
