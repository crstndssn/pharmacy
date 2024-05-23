import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Navigation from '../components/Navigation'
import Menu from '../components/Menu'

import CocktailSearch from './CocktailSearch';
import header from '../images/header.jpg'
import video from '../images/glass.jpg'
const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// Función para realizar la solicitud a la API
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products');

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setProducts(data); // Almacenar los datos en el estado local
			} catch (error) {
				console.error('Fetch error:', error);
			}
		};

		// Llamar a la función para obtener los productos al montar el componente
		fetchProducts();

		// No olvides limpiar los efectos si es necesario
		return () => {
			// Código de limpieza si es necesario
		};
	}, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente

	return (
		<div class="relative min-h-screen h-full bg-white">
			<img class="absolute top-0 left-0 w-full h-full object-cover p-2 md:p-7 rounded-[3rem] object-center" src={video} frameborder="0" />
			<div class="relative z-10 flex items-center justify-between flex-col  pt-10 h-screen">
				<Navigation />

				<Menu />
			</div>
		</div>
	)
}

export default Home