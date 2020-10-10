import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function Search() {
    return (
        <View style={StyleSheet.searchContainer}>
            <TextInput
                style={style.inputContainer}
                placeholder="Enter Title, Author, Publisher, or ISBN"
            />
            <Button title="Search" />
        </View>
    );
}

const style = StyleSheet.create({
    searchContainer: {},
    inputContainer: {
        borderWidth: 1,
    },
});

export default Search;
