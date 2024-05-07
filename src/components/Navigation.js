import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="contianer mx-auto w-full flex justify-between items-center">
			<div className="w-1/2">
					<h2 className="font-bold text-2xl">pharmacy</h2>
			</div>
			<div className="w-1/2 flex justify-between">
				<Link exact to='/home'>Inicio</Link>
				<Link to='/product'>Porductos</Link>
				<Link to='/contact'>Contact</Link> 
			</div>
		</div>
	)
}

export default Navigation