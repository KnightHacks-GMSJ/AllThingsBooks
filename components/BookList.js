import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Book from "./Book";

function BookList() {
    return (
        <View>
            <Book />
        </View>
    );
}

export default BookList;
