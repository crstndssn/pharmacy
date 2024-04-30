import React, { useState, useEffect } from 'react';
import axios from 'axios';

const options = {
	method: 'GET',
	url: 'https://drug-info-and-price-history.p.rapidapi.com/1/druginfo',
	params: { drug: 'advil' },
	headers: {
		'X-RapidAPI-Key': '9722fb91c5mshfb100fa9dd27dc2p1192c1jsn0d48ab67693d',
		'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
	}
};

const Api = () => {
	const [drugs, setDrugs] = useState();

	useEffect(() => {

			axios.request(options).then(function (response) {
				console.log(response.data);
			}).catch(function (error) {
				console.error(error);
			})


	}, []); // Empty dependency array to run once on component mount

	return (
		<div>

		</div>
	);
};

export default Api;