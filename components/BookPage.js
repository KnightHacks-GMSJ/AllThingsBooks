import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Modal, TouchableHighlight, StyleSheet, Image, Linking } from 'react-native';
import Book from './Book';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Text, Header, Body, Left, Right, Footer, Button } from 'native-base';

function BookPage({ onVisible, onModalVisible, book }) {
	// let newDescription;
	// if (book.description) {
	// 	let description = book.description;
	// 	const nthIndex = (str, pat, n) => {
	// 		let L = str.length,
	// 			i = -1;
	// 		while (n-- && i++ < L) {
	// 			i = str.indexOf(pat, i);
	// 			if (i < 0) break;
	// 		}
	// 		return i;
	// 	};

	// 	let index = nthIndex(description, '. ', 7);
	// 	newDescription = description.substring(0, index + 1);
	// } else newDescription = 'Description Not Available';

	return (
		<Modal animationType="slide" transparent={true} visible={onVisible}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Header
						style={{
							padding: 10,
							flexDirection: 'column',
							backgroundColor: '#E4D3F9',
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{book.title}</Text>
						<Text note style={{ fontSize: 16, fontWeight: '600' }}>
							{book.author}
						</Text>
						<Text>
							Average Rating:
							{book.averageRating ? ` ${book.averageRating} out of 5` : ' Unavailable'}
						</Text>
					</Header>

					<Text style={{ top: 5, right: 5, alignSelf: 'flex-end' }} note>
						Publisher: {book.publisher || 'Unavailable'}
					</Text>
					<Text style={{ top: 5, right: 5, alignSelf: 'flex-end' }} note>
						Year Published:
						{book.publishedDate ? ' ' + book.publishedDate.substring(0, 4) : 'Unavailable'}
					</Text>
					<Text style={{ top: 5, right: 5, alignSelf: 'flex-end' }} note>
						Page Count: {book.pageCount || 'Unavailable'}
					</Text>
					<Text style={{ padding: 10 }}>{book.description}</Text>

					<Text
						style={{ padding: 10, color: 'blue' }}
						onPress={() => {
							book.linkToBuy !== 'Unavailable' ? Linking.openURL(book.linkToBuy) : '';
						}}
					>
						{book.linkToBuy !== 'Unavailable' ? `Click Here to Buy` : ' Link to Buy Unavailable'}
					</Text>
					<TouchableHighlight
						onPress={() => {
							book.linkToBuy !== 'Unavailable' ? Linking.openURL(book.linkToBuy) : '';
						}}
					>
						<Image
							source={require('../assets/cart.png')}
							style={{ height: 30, width: 30, bottom: 5, left: 10 }}
						></Image>
					</TouchableHighlight>
					<Footer>
						{/* TODO: 
                                - Shopping link : done
                                - ratings: done
                                - pageCount: done
                        */}
						<Right>
							<TouchableHighlight
								style={{
									...styles.openButton,
									backgroundColor: '#E4D3F9',
									right: 4,
								}}
								onPress={() => {
									onModalVisible(!onVisible);
								}}
							>
								<Text style={styles.textStyle}>X</Text>
							</TouchableHighlight>
						</Right>
					</Footer>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		marginTop: 30,
	},
	modalView: {
		margin: 10,
		backgroundColor: '#EEE5FA',
		// backgroundColor: "#E4D3F9",
		// borderRadius: 20,
		// alignItems: "center",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 5,
	},
	openButton: {
		backgroundColor: '#F194FF',
		borderRadius: 20,
		padding: 10,
		width: '10%',
		elevation: 2,
	},
	textStyle: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});

export default BookPage;
