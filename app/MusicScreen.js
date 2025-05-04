import React from "react";
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
import { BlurView } from "expo-blur"

const MusicScreen = () => {
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
                {
                  title: "Beach House",
                  image: "https://picsum.photos/200/200",
                },
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
            <CategoryCard title="ROCK" image="https://picsum.photos/200/200" />
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
          <View>
            <Text style={styles.playerTitle}>Inside Out</Text>
            <Text style={styles.playerSubtitle}>The Chainsmokers, Charlee</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play" size={22} color="#fff" />
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
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  row: {
    marginVertical: 16,
    flexDirection: "row",
    paddingHorizontal: 10,
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
    backdropFilter: 'blur(10px)', // não afeta visualmente, mas boa prática em web
    backgroundColor: 'rgba(0, 0, 0, 0.27)', // <- Preto com 40% de opacidade
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
    marginRight: 10,
  },
  playerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  playerSubtitle: {
    color: "#aaa",
    fontSize: 14,
  },
  playButton: {
    marginLeft: "auto",
    padding: 10,
  },
});

export default MusicScreen;
