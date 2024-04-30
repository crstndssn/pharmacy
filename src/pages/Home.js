import React from "react";

import header from '../images/header.jpg'

const Home = () => {
	return (
		<div className="container mx-auto">
			<div className="w-full">
				<img className="h-1/2" src={header} />
			</div>

			<div className="grid grid-cols-3">
				<div className="border border-green-600">
					<h2>Ofertas</h2>
				</div>
				<div>
					<h2>Medicamentos</h2>
				</div>
				<div>
					<h2>Formulados</h2>
				</div>
				<div>
					<h2>Formulados</h2>
				</div>
			</div>


			<h2></h2>
			<div>
				<div className="">
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
				<div className="">
					<img src="https://beta1.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe1202ec7/images/large/550615_1_LIMPIADOR_FACIAL_DIARIO_CETAPHIL_PIEL_MIXTA_A_GRASA_Y_SENSIBLE_FCO_X_473ML%20(2).jpg?sw=295&sh=295" />
					<h2>cremas</h2>
				</div>
			</div>

		</div>
	)
}

export default Home