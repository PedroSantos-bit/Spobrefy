import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import ScreenMain from "./src/components/ScreenMain";
import { StyleSheet, View } from "react-native";
import { trackData } from "./src/components/MusicData";
import { LinearGradient } from "expo-linear-gradient";

const MusicScreen = () => {
  const [sound, setSound] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = trackData[currentTrackIndex];

  const loadAndPlay = async () => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        currentTrack.file,
        { shouldPlay: true }
      );

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis || 1);
          setPosition(status.positionMillis || 0);
          setProgress(
            (status.positionMillis || 0) / (status.durationMillis || 1)
          );
          setIsPlaying(status.isPlaying);
        }
      });

      setSound(newSound);
    } catch (error) {
      console.log("Erro ao carregar áudio:", error);
    }
  };

  useEffect(() => {
    loadAndPlay();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentTrackIndex]);

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % trackData.length;
    setCurrentTrackIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      currentTrackIndex === 0 ? trackData.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      
        <ScreenMain
          avatar={require("./src/img/IconeApp.png")}
          albumImage={currentTrack.image}
          title={currentTrack.title}
          subtitle={currentTrack.subtitle}
          progress={progress}
          position={position}
          duration={duration}
          soundRef={{ current: sound }}
          onNext={handleNext}
          onPrev={handlePrev}
          isPlaying={isPlaying}
          gradientColors={["#FF00FF", "#4B0082", "#8A2BE2", "#8A2BE2"]} // <- aqui!
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MusicScreen;
