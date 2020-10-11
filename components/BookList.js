import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Modal, StyleSheet, TouchableHighlight } from "react-native";

import Book from "./Book";
import { Container, Content, List, ListItem, Row, Text } from "native-base";
import BookPage from "./BookPage";

function BookList(props) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container
            style={{
                width: "75%",
                marginVertical: 20,
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 20,
                alignContent: "space-between",
                backgroundColor: "transparent",
            }}
        >
            <BookPage onVisible={modalVisible} />

            {props.books.map((book) => (
                <Book key={book.id} book={book} onModal={setModalVisible} />
            ))}
        </Container>
    );
}

export default BookList;
