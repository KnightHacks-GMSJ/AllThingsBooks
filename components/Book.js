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
				backgroundColor: '#03BBF9',
				borderRadius: 30,
				borderWidth: 0.5,
				marginVertical: 5,
				marginHorizontal: -20,
			}}
		>
			<Content>
				<Card transparent>
					<Body>
						<Text>{book.title}</Text>
						<Text>{book.author}</Text>
						<Text>{book.publisher}</Text>
						<Text>{book.publishedDate}</Text>
						<Text>{book.linkToBuy}</Text>
						<Text>{book.pageCount} Pages</Text>
					</Body>
				</Card>
			</Content>
		</Container>
	);
}

export default Book;
