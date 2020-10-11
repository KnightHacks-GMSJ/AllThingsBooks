import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Modal, StyleSheet, TouchableHighlight } from "react-native";

import Book from "./Book";
import { Container, Content, List, ListItem, Row, Text } from "native-base";
import BookPage from "./BookPage";

function BookList(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loadedBook, setLoadedBook] = useState([]);

    const handleLoadBook = (book) => {
        setLoadedBook(book);
        console.log(loadedBook);
        setModalVisible(true);
    };

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
            <BookPage
                onVisible={modalVisible}
                onModalVisible={setModalVisible}
                book={loadedBook}
            />

            {props.books.map((book) => (
                <Book key={book.id} book={book} onLoadBook={handleLoadBook} />
            ))}
        </Container>
    );
}

export default BookList;
