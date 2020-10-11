import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image } from 'react-native';

import { Card, Container, Content, Text, Header, CardItem, Body, Right } from 'native-base';

function Book(props) {
	return (
		<Container
			style={{ padding: 20, backgroundColor: 'dodgerblue', borderWidth: 0, marginVertical: 5 }}
		>
			<Content>
				<Card transparent>
					<Body>
						<Text>{props.book.title}</Text>
						<Text note>{props.book.author}</Text>
					</Body>
					<CardItem cardBody bordered style={{ margin: 30 }}>
						<Image source={require('../assets/content.jpg')} style={{ height: 400, flex: 1 }} />
					</CardItem>
				</Card>
			</Content>
		</Container>
	);
}

export default Book;
