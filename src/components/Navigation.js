import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();

  const searchCocktailsByName = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
      setIsSearching(true);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  const listCocktailsByFirstLetter = async (letter) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
      setIsSearching(true);
    } catch (error) {
      console.error('Error fetching cocktails by letter:', error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchCocktailsByName();
  };

  const handleLetterClick = (letter) => {
    listCocktailsByFirstLetter(letter);
  };

  const closeModal = () => {
    setIsSearching(false);
    setCocktails([]);
    setSearchTerm('');
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearching]);

  const handleProductClick = (id) => {
    closeModal();  // Cierra el modal
    navigate(`/product/${id}`);  // Navega a la página de detalles del producto
  };

  return (
    <>
      <div className='w-full flex flex-col px-5'>
        <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center p-4 shadow-xl bg-white rounded-xl md:rounded-b-none transition-transform duration-700 ease-in-out">
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-2xl text-center md:text-left my-3 md:my-0">PHARMACY</h2>
          </div>
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSearchSubmit} className="w-full md:flex gap-4 px-4">
              <input
                className="w-full border border-black focus-visible:border-2 py-3 px-4 md:py-2 md:px-8 rounded-4xl rounded-full text-base md:text-xl placeholder:text-base md:placeholder:text-xl mb-3 md:mb-0"
                type="text"
                placeholder="Search by cocktail name..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                autoFocus
              />
              <button type="submit" className="w-full md:w-64 bg-black border-black hover:bg-white hover:text-black p-2 text-white md:text-xl font-medium border-2 rounded-full">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:flex overflow-y-scroll md:overflow-y-hidden bg-white container mx-auto  items-center py-5 rounded-b-xl">
          <div className="w-full text-center">
            <div className="flex justify-center">
              {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map((letter) => (
                <button className="border border-black mx-2 p-2 rounded-full" key={letter} onClick={() => handleLetterClick(letter)}>
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isSearching && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
          <div ref={modalRef} className="bg-white rounded-xl p-1 py-14 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-black focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="max-h-[80vh] overflow-y-scroll container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-7 p-4">
              {cocktails.map((cocktail) => (
                <li className="border-2 border-black rounded-lg cursor-pointer" key={cocktail.idDrink} onClick={() => handleProductClick(cocktail.idDrink)}>
                  <img className="rounded-t-md" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <h3 className="p-2 md:p-3 font-medium md:text-xl">{cocktail.strDrink}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
