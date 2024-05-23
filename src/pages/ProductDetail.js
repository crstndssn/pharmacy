import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import video from '../images/glass.jpg'


const ProductDetail = () => {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState(null);

	useEffect(() => {
		const fetchCocktail = async () => {
			try {
				const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
				const data = await response.json();
				setCocktail(data.drinks[0]);
			} catch (error) {
				console.error('Error fetching cocktail details:', error);
			}
		};

		fetchCocktail();
	}, [id]);

	if (!cocktail) {
		return <div>Loading...</div>;
	}

	return (
		<div class="relative min-h-screen h-full bg-white">
			<img class="absolute top-0 left-0 w-full h-full object-cover p-2 md:p-7 rounded-[1.5rem] md:rounded-[3rem]" src={video} frameborder="0" />
			<div class="relative z-10 flex items-center justify-between flex-col pt-10 h-screen">
				<Navigation />
				<div className="container md:mx-auto w-[90%] md:w-full my-3 p-2 md:mt-0 md:p-4 bg-white overflow-hidden rounded-xl md:max-h-[100vh]">
					<div className="flex flex-col md:flex-row md:justify-center items-center h-full gap-7 md:mx-4 overflow-scroll md:overflow-hidden">
						<div className='md:w-1/3 flex items-center'>
							<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-auto md:max-h-[50vh] rounded-xl" />
						</div>
						<div className='md:w-2/3 flex flex-col'>
							<h2 className="text-5xl font-semibold mb-3">{cocktail.strDrink}</h2>
							<div className='flex flex-col md:flex-row gap-10'>
								<div className="md:w-1/2 border-2 p-3 py-4 rounded-xl">
									<p className="mb-2 text-xl"><span className='font-semibold'>Categoría:</span> {cocktail.strCategory}</p>
									<p className="mb-2 text-xl"><span className='font-semibold'>Tipo de vaso:</span> {cocktail.strGlass}</p>
									<p className="mb-4 text-2xl mt-4">{cocktail.strInstructions}</p>
								</div>
								<div className='md:w-1/2 flex flex-col'>
									<div>
										<h3 className="text-2xl font-semibold mb-2">Ingredientes:</h3>
										<ul className="list-disc list-inside">
											{Array.from({ length: 15 }).map((_, index) => {
												const ingredient = cocktail[`strIngredient${index + 1}`];
												const measure = cocktail[`strMeasure${index + 1}`];
												if (ingredient && measure) {
													return (
														<li key={index} className="text-xl">
															{ingredient}: {measure}
														</li>
													);
												}
												return null;
											})}
										</ul>
									</div>

									<button className='max-w-80 bg-black text-white rounded-full px-4 py-2 text-xl mt-4'>Comprar</button>
								</div>


							</div>



						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default ProductDetail;
