import React, { useState } from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import uuid from 'uuid-random';
import axios from 'axios';
import { Form, Item, Input, Button } from 'native-base';

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
		res.data.items.map((book) => {
			const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unavailable';
			newBooksArray.push({
				id: uuid(),
				title: book.volumeInfo.title,
				author,
				publisher: book.volumeInfo.publisher,
				publishedDate: book.volumeInfo.publishedDate,
				description: book.volumeInfo.description,
				pageCount: book.volumeInfo.pageCount,
				averageRating: book.volumeInfo.averageRating,
				linkToBuy: book.saleInfo.buyLink || 'Unavailable',
				// smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail || 'Unavailable',
				// thumbnail: book.volumeInfo.imageLinks.thumbnail,
				// linkToPdf: book.accessInfo.pdf.acsTokenLink || "Unavailable",
			});
		});
		setBookData(newBooksArray);
	};

	return (
		<Form style={style.form}>
			<Item rounded style={style.input}>
				<Input
					placeholder="Enter Title or Author..."
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
			{/* <Text onPress={() => Linking.openURL('http://google.com')}>test </Text> */}
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
