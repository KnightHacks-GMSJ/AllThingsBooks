import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';

import Title from './components/Title';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
	const [currentBooksList, setCurrentBooksList] = useState([]);

	const onSearch = (booksArray) => {
		setCurrentBooksList(booksArray);
		console.log(booksArray);
	};

	return (
		<ImageBackground
			style={styles.backgroundImage}
			source={require('./assets/background-image.jpg')}
		>
			<SafeAreaView style={styles.safeArea}>
				<Title />
				<Search onSearch={onSearch} />
				<BookList />
			</SafeAreaView>
		</ImageBackground>
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
