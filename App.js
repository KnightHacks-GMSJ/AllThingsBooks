import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import TestNative from './components/TestNative';
import Title from './components/Title';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
	return (
		<ImageBackground
			style={styles.backgroundImage}
			source={require('./assets/background-image.jpg')}
		>
			<SafeAreaView style={styles.safeArea}>
				<Title />
				<Search />
				<TestNative />
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
