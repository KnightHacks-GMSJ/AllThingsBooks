import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Book from './Book';
import { Container, Content, List, ListItem, Row, Text } from 'native-base';

function BookList(props) {
	return (
		<Container
			style={{
				width: '75%',
				marginVertical: 20,
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'space-between',
				flexGrow: 20,
				alignContent: 'space-between',
				backgroundColor: 'transparent',
			}}
		>
			{props.books.map((book) => (
				<Book key={book.id} book={book} />
			))}
		</Container>
	);
}

export default BookList;
