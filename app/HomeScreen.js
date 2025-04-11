import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import PlayerControls from "./src/components/PlayerControls";
import BottomNavigation from "./src/components/BottomNavigation";

const Home = () => {
  {
    /* Reproduzir áudio real */
  }
  const soundRef = useRef(new Audio.Sound());

  {
    /* barra de progresso, posição e duração em tempo real */
  }
  const [progress, setprogress] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  {
    /* carrega e toca um áudio da internet */
  }
  const loadAndPlay = async () => {
    try {
      await soundRef.current.unloadAsync(); // caso já tenha um som
      await soundRef.current.loadAsync({
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      });
      await soundRef.current.playAsync();
      monitorProgress();
    } catch (erro) {
      console.log("Erro ao carregar:", erro);
    }
  };

  {
    /* monitora e atualiza a barra de progresso */
  }

  const monitorProgress = () => {
    soundRef.current.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis || 1);
        setPosition(status.positionMillis || 0);
        setprogress(
          (status.positionMillis || 0) / (status.durationMillis || 1)
        );
      }
    });
  };

  {
    /* Função utilitária para converter milissegundos em segundos */
  }
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  {
    /* cuida do ciclo de vida do áudio */
  }
  useEffect(() => {
    loadAndPlay();
    return () => {
      soundRef.current.unloadAsync(); // limpa áudio ao sair
    };
  }, []);

  return (
    <LinearGradient
      colors={["#F7F7F7", "#F7F7F7", "#F7F7F7", "#00032b"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Avatar */}
      <Image
        style={styles.imageAvatar}
        source={require("../assets/icone.png")}
      />

      {/* Título */}
      <Text style={styles.textHome}>Home</Text>

      {/* Capa do Álbum */}
      <View style={styles.albumCover}>
        <Image
          style={styles.albumImage}
          source={require("../assets/image.png")}
        />
      </View>

      {/* Informações da música */}
      <Text style={styles.songTitle}>Julie</Text>
      <Text style={styles.albumTitle}>Flutter - Album</Text>

      {/* Barra de progresso */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
        </View>
      </View>
      {/* A barra de progresso já está vinculada ao tempo real da música*/}
      <View style={styles.timeRow}>
        <Text>{formatTime(position)}</Text>
        <Text>{formatTime(duration)}</Text>
      </View>

      <PlayerControls soundRef={soundRef} />
      <BottomNavigation />
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    alignItems: "center",
  },
  imageAvatar: {
    width: 65,
    height: 65,
    borderRadius: 25,
  },
  textHome: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  albumCover: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  albumImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  albumTitle: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  progressBarContainer: {
    width: "80%",
    height: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#555",
    borderRadius: 2,
  },
  progressFill: {
    width: "60%",
    height: 4,
    backgroundColor: "#00E0D6",
    borderRadius: 2,
  },
  timeRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: -35, 
  },
  controls: {},
  playButton: {},
  navBar: {},
  navItem: {},
  navLabel: {},
});
