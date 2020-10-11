import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Book from "./Book";
import { Container, Content, List, ListItem, Text } from "native-base";

function BookList(props) {
    return (
        <Container style={{ width: "75%" }}>
            {props.books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </Container>
    );
}

export default BookList;
