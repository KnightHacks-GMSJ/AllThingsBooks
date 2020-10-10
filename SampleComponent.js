import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

const ApiView = () => {
	const goForAxios = async () => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
		console.log(data);
	};
	return (
		<View>
			<View style={{ margin: 18 }}>
				<Button title={'Click using axios'} onPress={goForAxios} color="green" />
			</View>
		</View>
	);
};
export default ApiView;
