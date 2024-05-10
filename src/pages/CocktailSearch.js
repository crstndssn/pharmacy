import React, { useState } from 'react';

const CocktailSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [cocktails, setCocktails] = useState([]);

	const searchCocktailsByName = async () => {
		try {
			const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
			const data = await response.json();
			setCocktails(data.drinks || []); // Actualizar el estado con los resultados de la búsqueda
		} catch (error) {
			console.error('Error fetching cocktails:', error);
		}
	};

	const listCocktailsByFirstLetter = async (letter) => {
		try {
			const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
			const data = await response.json();
			setCocktails(data.drinks || []); // Actualizar el estado con los resultados de la búsqueda por letra
		} catch (error) {
			console.error('Error fetching cocktails by letter:', error);
		}
	};

	const handleSearchInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault(); // Evitar que se recargue la página al enviar el formulario
		searchCocktailsByName();
	};

	const handleLetterClick = (letter) => {
		listCocktailsByFirstLetter(letter);
	};

	return (
		<div className='container mx-auto min-h-[70vh] flex items-center mb-12'>

			<div className='w-full'>
				<h2 className='text-center text-6xl mb-12 font-semibold'>Cocktail Search</h2>
				<form onSubmit={handleSearchSubmit} className='w-full flex gap-4'>
					<input
						className='w-full border-2 border-black focus-visible:border-[#3AF062] py-5 px-8 rounded-4xl rounded-full text-xl placeholder:text-xl'
						type="text"
						placeholder="Search by cocktail name..."
						value={searchTerm}
						onChange={handleSearchInputChange}
					/>
					<button type="submit" className='w-64 bg-[#3AF062] border-[#3AF062] hover:text-white text-black text-xl font-medium border-4 rounded-full'>Search</button>
				</form>
				<div className='text-center my-10'>
					<h3>Or browse by first letter:</h3>
					<div className='mt-4'>
							{Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((letter) => (
						<button className='border mx-2 p-2 shadow-sm' key={letter} onClick={() => handleLetterClick(letter)}>
							{letter}
						</button>
					))}
					</div>
				
				</div>
				<hr />
				<h3 className='my-3'>Results:</h3>
				<ul className='grid grid-cols-3 gap-7'>
					{cocktails.map((cocktail) => (
						<li className='border-2 border-black rounded-lg' key={cocktail.idDrink}>
							
							<img className='rounded-t-md' src={cocktail.strDrinkThumb} alt="" srcset="" />
							<h3 className='p-3 font-medium text-xl'>{cocktail.strDrink}</h3>
							</li>
					))}
				</ul>
			</div>




		</div>
	);
};

export default CocktailSearch;
