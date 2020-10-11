import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, TouchableHighlight, View } from 'react-native';

import { Card, Container, Content, Text, Header, CardItem, Body, Button, Right } from 'native-base';

function Book({ book, onLoadBook }) {
	return (
		<TouchableHighlight
			style={{
				padding: 20,
				height: '12%',
				width: '100%',
				backgroundColor: '#E4D3F9',
				borderRadius: 30,
				marginVertical: 5,
			}}
			onPress={() => onLoadBook(book)}
		>
			<Content>
				<Card transparent>
					<Body>
						<Text style={{ fontSize: 17, fontWeight: 'bold' }}>{book.title}</Text>
						<Text note style={{ fontWeight: '600' }}>
							{book.author}
						</Text>
					</Body>
				</Card>
			</Content>
		</TouchableHighlight>
	);
}

export default Book;
