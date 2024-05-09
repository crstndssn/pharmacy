import React from "react";

import header from '../images/header.jpg'

const Home = () => {
	return (
		<div className="">
			<div className="w-full h-56 overflow-hidden">
				<img className="w-full h-auto" src={header} />
			</div>

			<div className="container mx-auto grid grid-cols-4 py-12">
				<div className="flex justify-center items-center border border-green-600 rounded-full w-36 h-36">
					<h2>Ofertas</h2>
				</div>
				<div className="flex justify-center items-center border border-green-600 rounded-full w-36 h-36">
					<h2>Medicamentos</h2>
				</div>
				<div className="flex justify-center items-center border border-green-600 rounded-full w-36 h-36">
					<h2>Formulados</h2>
				</div>
				<div className="flex justify-center items-center border border-green-600 rounded-full w-36 h-36">
					<h2>Formulados</h2>
				</div>
			</div>


			<h2>Ofertas</h2>
			<div>
				<div className="shadow-xl">
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<div className="flex justify-between">
						<h2>cremas</h2>
						<p className="bg-green-700 text-white">$55.0000</p>
					</div>
				</div>
				<div className="">
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
			</div>

			<h2>Medicamentos</h2>
			<div>
				<div>
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
				<div>
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
				<div>
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
			</div>

		</div>
	)
}

export default Home