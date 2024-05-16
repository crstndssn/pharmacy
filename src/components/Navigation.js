import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="container mx-auto w-full flex justify-between items-center py-12">
			<div className="w-1/2">
					<h2 className="font-bold text-2xl">Pharmacy</h2>
			</div>
			<div className="w-1/4 flex justify-between">
				<Link exact to='/'>Inicio</Link>
				<Link to='/product'>Productos</Link>
				<Link to='/contact'>Contact</Link> 
				<Link to='/about'>About</Link> 
			</div>
		</div>
	)
}

export default Navigation