import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';


const PlayerControls = ({ soundRef, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = async () => {
    const status = await soundRef.current.getStatusAsync();
    if (status.isPlaying) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  };
  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.otherButton} >
        <Ionicons name="shuffle" size={24} color="#F7F7F7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.otherButton} onPress={onPrev} >
        <Ionicons name="play-skip-back" size={28} color="#F7F7F7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton} onPress={togglePlayPause} >
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={28} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.otherButton} onPress={onNext} >
        <Ionicons name="play-skip-forward" size={28} color="#F7F7F7" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.otherButton} >
        <Feather name="repeat" size={24} color="#F7F7F7" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: "center",
  },
  playButton: {
    backgroundColor: '#FFFFFF80', 
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  },
  otherButton: {
    backgroundColor: '#000000', 
    borderRadius: 25,
    padding: 10,
    elevation: 3,
  }
});

export default PlayerControls;
