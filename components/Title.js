import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';

const fetchFonts = () => {
	return Font.loadAsync({
		'ArchitectsDaughter-Regular': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
	});
};

function Title({ booksArray }) {
	const titleMessage =
		booksArray.length > 0 ? (
			<Text style={styles.titleOnSearch}>All Things Books</Text>
		) : (
			<Text style={styles.title}>All Things Books</Text>
		);

	const [dataloaded, setDataLoaded] = useState(false);
	if (!dataloaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />;
	}
	return <View>{titleMessage}</View>;
}

const styles = StyleSheet.create({
	title: {
		justifyContent: 'center',
		marginTop: '60%',
		marginBottom: '2%',
		fontFamily: 'ArchitectsDaughter-Regular',
		fontSize: 45,
	},
	titleOnSearch: {
		justifyContent: 'center',
		marginTop: '10%',
		marginBottom: '2%',
		fontFamily: 'ArchitectsDaughter-Regular',
		fontSize: 45,
	},
});
export default Title;
