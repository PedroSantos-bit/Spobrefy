import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const ArtistCircle = ({ name, image }) => (
    <View style={styles.container} >
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 20,
        
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        
    },
    name: {
        marginTop: 4,
        fontSize: 12,
        color: '#FFFFFF',
    },
    
});

export default ArtistCircle;


