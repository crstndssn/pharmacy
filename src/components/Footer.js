import React from "react";

import { Link } from 'react-router-dom'
import img1 from '../images/Imgdrog.jpg'
import img2 from '../images/davilogo.jpg'
import img3 from '../images/nequilogo.jpg'
import img4 from '../images/pselogo.jpg'
import img5 from '../images/facebook.png'
import img6 from '../images/youtube.png'
import img7 from '../images/x.png'
import img8 from '../images/instagram.png'



const Footer = () => {
	return (
		<div className="container mx-auto flex flex-col md:flex-row gap-4 mb-6 md:mb-12 px-4 md:px-0">
			<div className="hidden w-full bg-white rounded-xl border-2 border-black container mx-auto md:flex flex-col md:flex-row justify-between items-center md:py-6 px-12">
				<div className="w-full flex flex-col gap-2 text-center md:text-left">
					<h3>Síguenos en redes</h3>
					<div className="flex justify-center md:justify-start gap-4">
						<a className="hover:font-medium" rel="noreferrer" target="_blank" href="https://www.facebook.com/"><img src={img5} alt="" className="w-8" /></a>
						<a rel="noreferrer" target="_blank" href="https://www.youtube.com/"><img src={img6} alt="" className="w-8" /></a>
						<a rel="noreferrer" target="_blank" href="https://twitter.com/?lang=es"><img src={img7} alt="" className="w-8" /></a>
						<a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><img src={img8} alt="" className="w-8" /></a>
					</div>
				</div>
				<div className="w-full">

					<div className="gap-2 grid grid-cols-3 m-4">
						<div className="w-full h-10 md:h-16">
							<img
								src={img4}
								alt="Descripción de la imagen 1"
								className="object-cover w-full h-full rounded-md"
							/>
						</div>
						<div className="w-full h-10 md:h-16">
							<img
								src={img3}
								alt="Descripción de la imagen 2"
								className="object-cover w-full h-full rounded-md"
							/>
						</div>
						<div className="w-full h-10 md:h-16">
							<img
								src={img2}
								alt="Descripción de la imagen 3"
								className="object-cover w-full h-full rounded-md"
							/>
						</div>
					</div>

				</div>
			</div>
			<div className="w-full grid grid-cols-3 gap-4">
				<div className='w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>inicio</Link>
				</div>
				<div className='w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/contact" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>contact</Link>
				</div>
				<div className='w-full bg-white hover:bg-black hover:text-white rounded-xl flex justify-start items-end p-2 md:p-4 border-2 border-black cursor-pointer'>
					<Link to="/about" className='w-full h-full text-xl md:text-4xl text-center flex items-center justify-center'>about</Link>
				</div>
			</div>
		</div >
	)
}

export default Footer