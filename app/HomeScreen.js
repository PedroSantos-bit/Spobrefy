// HomeScreen.js

import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import ScreenMain from "./src/components/ScreenMain";

const HomeScreen = () => {
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
    />
  );
};

export default HomeScreen;
