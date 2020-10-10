import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

export default function App() {
    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={require("./assets/background-image.jpg")}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
});
