import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

const CategoryCard = ({ title, image }) => (
  <ImageBackground
    source={image}
    style={styles.card}
    imageStyle={{ borderRadius: 8 }}
  >
    <Text style={styles.text}> {title} </Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
    card: {
        width: 270,
        height: 270,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        //backgroundColor: "black", //testando 
        borderRadius: 20,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default CategoryCard;
