import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import Title from "./components/Title";
import Search from "./components/Search";
import BookList from "./components/BookList";

import { Container, Card } from "native-base";

function App() {
    return (
        <Container>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("./assets/background-image.jpg")}
            >
                <SafeAreaView style={styles.safeArea}>
                    <Title />
                    <Search />
                    <Card>
                        <BookList />
                    </Card>
                </SafeAreaView>
            </ImageBackground>
        </Container>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    safeArea: {
        alignItems: "center",
    },
});

export default App;
