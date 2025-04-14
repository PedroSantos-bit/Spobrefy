// src/components/PlayerLayout.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavigation from "./BottomNavigation";
import PlayerControls from "./PlayerControls";

const ScreenMain = ({
  avatar,
  albumImage,
  title,
  subtitle,
  progress,
  position,
  duration,
  children,
  soundRef,
  showControls = true, // padrão é mostrar os controles
  showTime = true, // padrão é mostrar o tempo
  showProgresso = true, // padrão é mostrar o progresso
  showBorder = true, // padrão é mostrar a borda
  showTitle = true, // padrão é mostrar o título
}) => {
  // Função para formatar o tempo de milissegundos para mm:ss
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    // View externa que ocupa a tela inteira
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#F7F7F7", "#F7F7F7", "#F7F7F7", "#00032b"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        {/* Avatar */}
        <Image style={styles.imageAvatar} source={avatar} />

        {/* Título principal */}
        {showTitle && (
        <Text style={styles.textHome}>Home</Text>
        )}

        {/* Capa do álbum */}
        {showBorder && (
          <View style={styles.albumCover}>
            <Image style={styles.albumImage} source={albumImage} />
          </View>
        )}

        {/* Título e subtítulo da música */}
        <Text style={styles.songTitle}>{title}</Text>
        <Text style={styles.albumTitle}>{subtitle}</Text>

        {/* Barra de progresso da música */}
        {showProgresso && (
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${progress * 100}%` }]}
              />
            </View>
          </View>
        )}

        {/* Tempos inicial e final */}
        {showTime && (
          <View style={styles.timeRow}>
            <Text>{formatTime(position)}</Text>
            <Text>{formatTime(duration)}</Text>
          </View>
        )}

        {/* Mostrar controles apenas se showControls for true */}
        {showControls && <PlayerControls soundRef={soundRef} />}

        {/* Conteúdo customizado passado como children */}
        {children}

        {/* Menu inferior de navegação */}
      </LinearGradient>
      {/* Barra de navegação fixada no fim da tela */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar espaço restante da tela
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
});

export default ScreenMain;
