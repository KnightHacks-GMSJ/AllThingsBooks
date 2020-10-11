import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';

import Title from './components/Title';
import Search from './components/Search';
import BookList from './components/BookList';
import { Container, Content, Header } from 'native-base';

function App() {
	const [currentBooksList, setCurrentBooksList] = useState([]);

	const onSearch = (booksArray) => {
		setCurrentBooksList(booksArray);
		console.log(currentBooksList);
	};

	const books = [
		{
			id: 1,
			title: 'A Game of Thrones',
			author: 'George R.R. Martin',
			publisher: 'Sample Publisher',
			publishedDate: '02/02/1999',
			description:
				'Minim ad fugiat eiusmod eiusmod magna occaecat ipsum do esse laboris. Occaecat nulla deserunt minim et exercitation duis aliquip velit consectetur amet consectetur. Eu officia exercitation do quis eiusmod reprehenderit dolor ea occaecat cillum id non.',
			pageCount: 800,
			linkToBuy: 'https://heresalink.com/buythisbookitsreallyreallyreallygood',
		},
		{ id: 2, title: 'A Game of Thrones', author: 'George R.R. Martin' },
		// { id: 3, title: 'A Game of Thrones', author: 'George R.R. Martin' },
		// { id: 4, title: 'A Game of Thrones', author: 'George R.R. Martin' },
		// { id: 5, title: 'A Game of Thrones', author: 'George R.R. Martin' },
		// { id: 6, title: 'A Game of Thrones', author: 'George R.R. Martin' },
		// { id: 7, title: 'A Game of Thrones', author: 'George R.R. Martin' },
	];

	return (
		<Container>
			<ImageBackground
				style={styles.backgroundImage}
				source={require('./assets/background-image.jpg')}
			>
				<Content>
					<SafeAreaView style={styles.safeArea}>
						<Title booksArray={currentBooksList} />
						<Search onSearch={onSearch} />
						<BookList books={books} />
					</SafeAreaView>
				</Content>
			</ImageBackground>
		</Container>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
	},
	safeArea: {
		alignItems: 'center',
	},
});

export default App;
