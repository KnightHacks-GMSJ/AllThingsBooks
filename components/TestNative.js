import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Container, Content, Card, Form, Item, Input } from 'native-base';
function TestNative() {
	return (
		<Form style={style.form}>
			<Item>
				<Input placeholder="Enter Title of Book to Get Started..."></Input>
			</Item>
			<Text>Sample text</Text>
		</Form>
	);
}

const style = StyleSheet.create({
	searchContainer: {},
	inputContainer: {
		borderWidth: 1,
	},
	form: {
		width: '90%',
	},
});

export default TestNative;
