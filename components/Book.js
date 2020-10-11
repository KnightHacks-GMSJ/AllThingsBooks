import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";

import { Card, Container, Content, Text, Header, CardItem } from "native-base";

function Book(props) {
    return (
        <Container>
            <Card>
                <Header>
                    <Text>{props.book.title}</Text>
                    <Text note>{props.book.author}</Text>
                </Header>
                <CardItem cardBody>
                    <Image source={require("../assets/content.jpg")} />
                </CardItem>
            </Card>
        </Container>
    );
}

export default Book;
