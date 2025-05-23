import React from "react";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import ScreenMain from "./src/components/ScreenMain";
import Icon from "react-native-vector-icons/Ionicons";

const recentSearches = [
  {
    id: "1",
    title: "You (feat. Travis Scott)",
    type: "Song • Don Toliver",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "2",
    title: "John Wick: Chapter 4",
    type: "Album • Tyler Bates, Joel J. Richard",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "3",
    title: "Maroon 5",
    type: "Artist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "4",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "5",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "6",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "7",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "8",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "9",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
  {
    id: "10",
    title: "Phonk Madness",
    type: "Playlist",
    icon: require("./src/img/favicon.png"),
  },
];

const togglePlayer = () => {
  setIsPlayerVisible(!isPlayerVisible);
  translateY.value = isPlayerVisible ? 1000 : 0; // Move o player para fora da tela ou para dentro
};

export default function FavoriteScreen() {
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
    >
      <View style={styles.container}>
        <View style={styles.favoriteButton}>
          <TextInput
            placeholder="Suas favoritas"
            style={styles.inputText}
            placeholderTextColor="#F7F7F7"
          />
          <Icon
            name="search"
            size={30}
            color="#f7F7F7"
            style={styles.searchIcon}
          />
        </View>
        <View style={{ flex: 1, width: "100%" }}>
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
                  <Icon name="heart" style={styles.buttonX} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Mini player fixo */}
        <BlurView intensity={50} tint="dark" style={styles.miniPlayer}>
          <Image
            source={require("./src/img/favicon.png")}
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
  favoriteButton: {
    width: "80%",
    backgroundColor: "#1C1C1E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0,
    marginTop: -80,
    marginBottom: 30,
  },
  inputText: {
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
  searchIcon: {},
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
    color: "#F7F7F7",
    fontSize: 18,
    fontWeight: "bold",
  },
  playerSubtitle: {
    color: "#F7F7F7",
    fontSize: 16,
  },
  playButton: {
    marginLeft: "auto",
    padding: 10,
  },
});
