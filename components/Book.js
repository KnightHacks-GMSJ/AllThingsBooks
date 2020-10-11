import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';

import { Card, Container, Content, Text, Header, CardItem, Body, Right } from 'native-base';

function Book({ book }) {
	return (
		<Container
			style={{
				padding: 15,
				height: 150,
				// backgroundColor: '#03BBF9',
				backgroundColor: '#e4d3f9',
				borderRadius: 30,
				marginVertical: 5,
				marginHorizontal: -20,
			}}
		>
			<Content>
				<View>
					<Body>
						<Text style={{ fontSize: '17', fontWeight: 'bold' }}>{book.title}</Text>
						<Text>Author: {book.author}</Text>
						<Text>Publisher: {book.publisher}</Text>
						<Text>Publish Date: {book.publishedDate}</Text>
						<Text>{book.linkToBuy}</Text>
						<Text>{book.pageCount} Pages</Text>
					</Body>
				</View>
			</Content>
		</Container>
	);
}

export default Book;
