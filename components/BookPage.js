import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Modal, TouchableHighlight, StyleSheet } from "react-native";

import Book from "./Book";
import { Text, Header, Body, Left } from "native-base";

function BookPage({ onVisible, onModalVisible, book }) {
    return (
        <Modal animationType="slide" transparent={true} visible={onVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Header
                        style={{
                            flexDirection: "column",
                        }}
                    >
                        <Text>{book.title}</Text>
                        <Text note>{book.author}</Text>
                    </Header>

                    <Text style={{ top: 5, left: 5 }} note>
                        {book.publishedDate}
                    </Text>
                    <Text style={{ padding: 10 }}>{book.description}</Text>

                    <TouchableHighlight
                        style={{
                            ...styles.openButton,
                            backgroundColor: "#2196F3",
                        }}
                        onPress={() => {
                            onModalVisible(!onVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        marginTop: 30,
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        // borderRadius: 20,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default BookPage;
