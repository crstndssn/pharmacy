import React, { useState, useEffect } from 'react';

const TodosLosProductos = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar la lista de productos
  const [filtro, setFiltro] = useState(''); // Estado para manejar el filtro seleccionado

  useEffect(() => {
    // Función para obtener todos los productos
    const fetchTodosLosProductos = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?c=');
        const data = await response.json();
        if (data.drinks) {
          setProductos(data.drinks); // Almacenar la lista de productos en el estado
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Llamar a la función para obtener todos los productos al montar el componente
    fetchTodosLosProductos();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  const handleFiltroChange = (event) => {
    setFiltro(event.target.value); // Actualizar el estado del filtro al cambiar su valor
  };

  // Filtrar la lista de productos según el filtro seleccionado
  const productosFiltrados = productos.filter(producto => {
    if (!filtro) {
      return true; // Mostrar todos los productos si no hay filtro seleccionado
    }
    // Ejemplo de filtro: filtrar por categoría (strCategory)
    return producto.strCategory === filtro;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos los Productos</h1>

      {/* Dropdown para seleccionar el filtro */}
      <div className="mb-4">
        <label htmlFor="filtro" className="mr-2">Filtrar por:</label>
        <select
          id="filtro"
          value={filtro}
          onChange={handleFiltroChange}
          className="px-2 py-1 border rounded"
        >
          <option value="">Todos</option>
          <option value="Cocktail">Cocktail</option>
          <option value="Shot">Shot</option>
          {/* Agrega otras opciones de filtro según los criterios disponibles */}
        </select>
      </div>

      {/* Lista de productos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosFiltrados.map(producto => (
          <div key={producto.idDrink} className="bg-white rounded p-4 shadow-md">
            <img src={producto.strDrinkThumb} alt={producto.strDrink} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="text-lg font-semibold">{producto.strDrink}</h2>
            <p className="text-gray-600">{producto.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosLosProductos;
