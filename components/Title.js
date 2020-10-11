import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { processFontFamily, useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter';
const fetchFonts = () => {
	return Font.loadAsync({
		'ArchitectsDaughter-Regular': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
	});
};
function Title(props) {
	const [dataloaded, setDataLoaded] = useState(false);
	if (!dataloaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} />;
	}
	return (
		<View>
			<Text style={styles.title}>All Things Books</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		justifyContent: 'center',
		marginTop: '60%',
		fontFamily: 'ArchitectsDaughter-Regular',
		fontSize: 45,
	},
});
export default Title;
