import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    View,
    Modal,
    TouchableHighlight,
    StyleSheet,
    Image,
} from "react-native";

import Book from "./Book";
import { Text, Header, Body, Left, Right, Footer, Button } from "native-base";

function BookPage({ onVisible, onModalVisible, book }) {
    return (
        <Modal animationType="slide" transparent={true} visible={onVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Header
                        style={{
                            flexDirection: "column",
                            backgroundColor: "#E4D3F9",
                        }}
                    >
                        <Text>{book.title}</Text>
                        <Text note>{book.author}</Text>
                    </Header>

                    <Text
                        style={{ top: 5, right: 5, alignSelf: "flex-end" }}
                        note
                    >
                        {book.publishedDate}
                    </Text>
                    <Text
                        style={{ top: 5, right: 5, alignSelf: "flex-end" }}
                        note
                    >
                        {book.publisher}
                    </Text>

                    <Text style={{ padding: 10 }}>{book.description}</Text>

                    <Footer>
                        {/* TODO: 
                                - Shopping link
                                - ratings
                                - pageCount
                        */}
                        <Right>
                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: "#E4D3F9",
                                    right: 4,
                                }}
                                onPress={() => {
                                    onModalVisible(!onVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>X</Text>
                            </TouchableHighlight>
                        </Right>
                    </Footer>
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
        // backgroundColor: "#E4D3F9",
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
        width: "10%",
        elevation: 2,
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default BookPage;
