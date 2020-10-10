import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextInput, View, StyleSheet, Text, FlatList } from 'react-native';
import uuid from 'uuid-random';
// import { Container, Content, Form, Item, Input, Text } from 'native-base';
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
				smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
				thumbnail: book.volumeInfo.imageLinks.thumbnail,
				linkToPdf: book.accessInfo.pdf.acsTokenLink || 'Unavailable',
			}),
		);
		console.log(newBooksArray[1]);
		setBookData(newBooksArray);
	};

	const renderBook = ({ title }) => {
		<Text>{title}</Text>;
	};

	return (
		<View style={StyleSheet.searchContainer}>
			<TextInput
				style={style.inputContainer}
				placeholder="Enter Title of the Book You Want to Search For!"
				onChangeText={(text) => setText(text)}
			/>
			<Button
				title="Search"
				onPress={() => {
					searchApi(text);
					onSearch(bookData);
				}}
			/>
		</View>

		// <Container>
		// 	<Content>
		// 		<Form>
		// 			<Item>
		// 				<Input style={style.inputContainer} placeholder="Type in a book" />
		// 			</Item>
		// 		</Form>
		// 		<Button primary>
		// 			<Text>"Click this"</Text>{' '}
		// 		</Button>
		// 	</Content>
		// </Container>
	);
}

const style = StyleSheet.create({
	searchContainer: {},
	inputContainer: {
		borderWidth: 1,
	},
});

export default Search;
