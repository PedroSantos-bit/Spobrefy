import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import AlbumCard from "./src/components/AlbumCard";
import CategoryCard from "./src/components/CategoryCard";
import ArtistCircle from "./src/components/ArtistCircle";
import ScreenMain from "./src/components/ScreenMain";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import Animated, {
  withTiming,
  Easing,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const HomeScreen = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  // Shared value para controlar a animação do player
  const translateY = useSharedValue(1000); // Inicia fora da tela

  // Animação para deslizar o player de baixo para cima
  const animatedPlayerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 500,
            easing: Easing.out(Easing.ease),
          }),
        },
      ],
    };
  });

  // Função para alternar a visibilidade do player
  const togglePlayer = () => {
    setIsPlayerVisible(!isPlayerVisible);
    translateY.value = isPlayerVisible ? 1000 : 0; // Move o player para fora da tela ou para dentro
  };

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
      showAvatar={false}
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
        >
          {/* Artistas */}
          <ScrollView
            style={styles.row}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {[
              { name: "Coldplay", image: "https://picsum.photos/200/200" },
              { name: "Katy Perry", image: "https://picsum.photos/200/200" },
              { name: "Maroon 5", image: "https://picsum.photos/200/200" },
              { name: "Linkin Park", image: "https://picsum.photos/200/200" },
              { name: "teste", image: "https://picsum.photos/200/200" },
              { name: "teste", image: "https://picsum.photos/200/200" },
              { name: "teste", image: "https://picsum.photos/200/200" },
            ].map((item, index) => (
              <ArtistCircle key={index} {...item} />
            ))}
          </ScrollView>

          {/* Ouvidas recentemente */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Ouvidas recentemente</Text>
              <Text style={styles.seeMore}>veja mais</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 15, paddingLeft: 16 }}
            >
              {[
                { title: "Inside Out", image: "https://picsum.photos/200/200" },
                { title: "Young", image: "https://picsum.photos/200/200" },
                { title: "Beach House", image: "https://picsum.photos/200/200" },
                { title: "Kills You", image: "https://picsum.photos/200/200" },
                { title: "teste", image: "https://picsum.photos/200/200" },
                { title: "teste", image: "https://picsum.photos/200/200" },
              ].map((item, index) => (
                <AlbumCard key={index} {...item} />
              ))}
            </ScrollView>
          </View>

          {/* Categorias */}
          <Text style={styles.sectionTitle}>Navegue por todas as seções</Text>
          <View style={styles.categories}>
            <CategoryCard
              title="ROCK"
              image="https://i1.sndcdn.com/avatars-000117283543-spgg5m-t500x500.jpg"
            />
            <CategoryCard
              title="Funk"
              image="https://i1.sndcdn.com/artworks-KYy2IK5ym7trxEdd-yVD4vQ-t500x500.jpg"
            />
            <CategoryCard
              title="INTERNATIONAL"
              image="https://i.scdn.co/image/ab67706f00000002b0a43e616020095ef25311f6"
            />
            <CategoryCard
              title=".."
              image="https://i1.sndcdn.com/artworks-kdIBQeaUBu2H-0-t500x500.jpg"
            />
            <CategoryCard
              title=".."
              image="https://i1.sndcdn.com/artworks-000145905516-xfbjwu-t500x500.jpg"
            />
            <CategoryCard
              title="INTERNATIONAL"
              image="https://picsum.photos/200/200"
            />
            <CategoryCard
              title="INTERNATIONAL"
              image="https://picsum.photos/200/200"
            />
            <CategoryCard
              title="INTERNATIONAL"
              image="https://picsum.photos/200/200"
            />
          </View>
        </ScrollView>

        {/* Barra do player fixa */}
        <BlurView intensity={50} tint="dark" style={styles.miniPlayer}>
          <Image
            source={require("../assets/favicon.png")}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginTop: -90,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  row: {
    marginVertical: 16,
    flexDirection: "row",
    paddingHorizontal: 0,
    //backgroundColor: "black",
    marginBottom: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    //backgroundColor: 'black',
  },
  seeMore: {
    color: "#FFF",
    fontSize: 20,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    color: "#aaa",
    fontSize: 16,
  },
  playButton: {
    marginLeft: "auto",
    padding: 10,
  },
});

export default HomeScreen;
