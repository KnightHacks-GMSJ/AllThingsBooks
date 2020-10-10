import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import uuid from 'uuid-random';
import axios from 'axios';
import { Container, Content, Card, Form, Item, Input, Button } from 'native-base';

function Search({ onSearch }) {
	const [text, setText] = useState('');
	const [bookData, setBookData] = useState([]);
	const searchApi = async (text) => {
		const res = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${text
				.split(' ')
				.join('+')}&key=AIzaSyCw0VmIeXD9CkzHaMK3R9PCwIFlzOgYO3Q`,
		);
		const newBooksArray = [];
		res.data.items.map((book) =>
			newBooksArray.push({
				id: uuid(),
				title: book.volumeInfo.title,
				author: book.volumeInfo.authors[0],
				publisher: book.volumeInfo.publisher,
				publishedDate: book.volumeInfo.publishedDate,
				description: book.volumeInfo.description,
				pageCount: book.volumeInfo.pageCount,
				averageRating: book.volumeInfo.averageRating,
				linkToBuy: book.saleInfo.buyLink || 'Unavailable',
				smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail || 'Unavailable',
				thumbnail: book.volumeInfo.imageLinks.thumbnail,
				linkToPdf: book.accessInfo.pdf.acsTokenLink || 'Unavailable',
			}),
		);
		console.log(newBooksArray[1]);
		// setBookData(newBooksArray);
	};

	return (
		<Form style={style.form}>
			<Item rounded style={style.input}>
				<Input
					placeholder="Enter Title of Book to Get Started..."
					onChangeText={(text) => setText(text)}
				></Input>
			</Item>
			<Button
				style={style.button}
				transparent
				info
				onPress={() => {
					searchApi(text);
					onSearch(bookData);
				}}
			>
				<Text>Search</Text>
			</Button>
		</Form>
	);
}

const style = StyleSheet.create({
	form: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		width: '65%',
		borderColor: '#35c7de',
	},
	button: {
		width: '30%',
		flexDirection: 'column',
		justifyContent: 'center',
	},
});

export default Search;
