import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import ScreenMain from "./src/components/ScreenMain";
import  Animated, { FadeInUp }  from "react-native-reanimated";
import { StyleSheet, View} from "react-native";
import { BlurView } from "expo-blur";
const MusicScreen = () => {
  const soundRef = useRef(new Audio.Sound());

  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  const loadAndPlay = async () => {
    try {
      await soundRef.current.unloadAsync();
      await soundRef.current.loadAsync({
        uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      });
      await soundRef.current.playAsync();
      monitorProgress();
    } catch (error) {
      console.log("Erro ao carregar áudio:", error);
    }
  };

  const monitorProgress = () => {
    soundRef.current.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis || 1);
        setPosition(status.positionMillis || 0);
        setProgress((status.positionMillis || 0) / (status.durationMillis || 1));
      }
    });
  };

  useEffect(() => {
    loadAndPlay();
    return () => {
      soundRef.current.unloadAsync();
    };
  }, []);

  return (
    
    <ScreenMain
      avatar={require("../assets/icone.png")}
      albumImage={require("../assets/image.png")}
      title="Julie"
      subtitle="Flutter - Album"
      progress={progress}
      position={position}
      duration={duration}
      soundRef={soundRef}
      >
    <Animated.View
    entering={FadeInUp.duration(500)}
    style={styles.container}
    >
    </Animated.View>
  
    </ScreenMain>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-start',
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
});

export default MusicScreen;
