// src/components/PlayerLayout.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavigation from "./BottomNavigation";
import PlayerControls from "./PlayerControls";
import { BlurView } from "expo-blur";

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
  showAvatar = true, // padrão é mostrar o Avatar
  showglassEffect = true, // padrão é mostrar o efeito de vidro
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
        colors={[ '#2f4f4f' , '#2e8b57', '#3cb371','#3cb371', '#2f4f4f' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        
        {/* Avatar */}
        {showAvatar && avatar && (
        <Image style={styles.imageAvatar} source={avatar} />
        )}

        {/* Título principal */}
        {showTitle && (
        <Text style={styles.textHome}>Music</Text>
        )}

        {/* Capa do álbum */}
        {showBorder && albumImage && (
          <View style={styles.albumCover}>
            <Image style={styles.albumImage} source={albumImage} />
          </View>
        )}

        {/* Título e subtítulo da música */}
        {title && <Text style={styles.songTitle}>{title}</Text>}
        {subtitle && <Text style={styles.albumTitle}>{subtitle}</Text>}

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
    paddingTop: 170,
  },
  imageAvatar: {
    width: 95,
    height: 95,
    borderRadius: 25,
    alignSelf: "center",
  },
  textHome: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  albumCover: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: "center",
    alignSelf: "center",
  },
  albumImage: {
    width: 270,
    height: 270,
    resizeMode: "cover",
  },
  songTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  albumTitle: {
    fontSize: 25,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
  progressBarContainer: {
    width: "80%",
    height: 20,
    marginBottom: 20,
    marginTop: 15,
    alignSelf: "center",
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
    alignSelf: "center",
  },
 // glassEffect: { //efeito de vidro na tela de musicScreen
    //flex: 1,
   // paddingHorizontal: 20,
    //paddingTop: 170,
    //borderRadius: 20, // opcional, se quiser deixar mais suave
  //},
});

export default ScreenMain;
