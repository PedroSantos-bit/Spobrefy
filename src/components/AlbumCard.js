import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const AlbumCard = ({ title, image }) => (
    <View style={styles.container} >
        <Image source={{ uri: image }} style={styles.image}  />
        <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}> {title} </Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        width: 140, 
        marginRight: 16,
    },
    image: {
        width: "100%",
        height: 140, 
        borderRadius: 8,
    },
    playButton: {
        position: 'absolute',
        top: 95,
        //left: 45,
        right: 210 / 2 - 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 5,
        
    },
    title: {
        color: '#FFFFFF',
        marginTop: 6,
    },
});

export default AlbumCard;