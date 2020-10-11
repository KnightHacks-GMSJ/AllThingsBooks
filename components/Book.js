import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';

import { Card, Container, Content, Text, Header, CardItem, Body, Right } from 'native-base';

function Book({ book }) {
	return (
		<Container
			style={{
				padding: 20,
				marginVertical: 20,
				backgroundColor: '#03BBF9',
				borderRadius: 30,
				borderWidth: 0,
				marginVertical: 5,
			}}
		>
			<Content>
				<View>
					<Body>
						<Text>{book.title}</Text>
						<Text>{book.author}</Text>
						<Text>{book.publisher}</Text>
						<Text>{book.publishedDate}</Text>
						<Text>{book.linkToBuy}</Text>
						<Text>{book.pageCount} Pages</Text>
					</Body>
				</View>
			</Content>
		</Container>
	);
}

export default Book;
