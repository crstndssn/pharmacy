import React from "react";
import img1 from '../images/Imgdrog.jpg'
import img2 from '../images/davilogo.jpg'
import img3 from '../images/nequilogo.jpg'
import img4 from '../images/pselogo.jpg'
import img5 from '../images/facebook.png'
import img6 from '../images/youtube.png'
import img7 from '../images/x.png'
import img8 from '../images/instagram.png'

const Contact = () => {
  return (
    <body>
      <div class="bg-black text-white py-1">
      </div>
      <div class="flex items-center">
        <h1 class="text-6xl font-bold mr-4 ml-20 mt-10">Contactenos</h1>
      </div>

      <div className="float-right mt-12 mr-20 w-1/3 h-auto object-contain">
        <img src={img1} alt="" className="rounded-md"/>
        <div />
      </div>

      <div class="flex">
        <h1 class="text-3xl font-bold mr-4 ml-20 mt-12">Nombre</h1>
        <h1 class="text-3xl font-bold mr-4 ml-52 mt-12">Apellido</h1>

      </div>
      <div class="flex items-center">
        <input type="text" class="border border-black rounded-md px-6 py-2 focus:outline-none focus:border-black ml-20 mt-3" placeholder="Digite su nombre..." />
        <input type="text" class="border border-black rounded-md px-7 py-2 focus:outline-none focus:border-black ml-16 mt-3" placeholder="Digite su apellido..." />
      </div>


      <div class="flex flex-col">
        <h1 class="text-3xl font-bold mr-4 ml-20 mt-12">Correo electronico</h1>
        <input type="text" class="border border-black rounded-md px-4 py-2 focus:outline-none focus:border-black ml-20 mt-3 max-w-screen-sm" placeholder="Coloque su correo electronico..." />

      </div>

      <button className=" float-right mt-10 mr-20 bg-black hover:bg-blue-700 text-white font-bold py-2 px-36 rounded">
        Enviar
      </button>

      <div class="flex flex-col">
        <h1 class="text-3xl font-bold mr-4 ml-20 mt-12">Mensaje</h1>
        <input type="text" class="h-24 border border-black rounded-md px-4 py-2 focus:outline-none focus:border-black ml-20 mt-3 max-w-screen-sm" placeholder="Deje su mensaje aquí..." />
      </div>

      <div class="mt-16 bg-black text-white py-1">
      </div>

      <div className="container mx-auto flex flex-column md:flex-row justify-between items-center">
        <div>
          <h3 class="font-bold mb-6">Siguenos para más novedades</h3>
          <div className="flex gap-4"> 
            <a className="hover:font-medium" rel="noreferrer" target="_blank" href="https://www.facebook.com/"><img src={img5} alt="" className="w-8"/></a>
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/"><img src={img6} alt="" className="w-8"/></a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/?lang=es"><img src={img7} alt="" className="w-8"/></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><img src={img8} alt="" className="w-8"/></a>
          </div>
        </div>
        <div className="">
          <h3 className="mt-6 font-bold">Medios de pago</h3>
          <div className="gap-10 flex w-full mt-4">
            <img
              src={img4}
              alt="Descripción de la imagen 1"
              className="rounded-md mb-4 w-36 h-auto"
            />
            <img
              src={img3}
              alt="Descripción de la imagen 2"
              className="rounded-md mb-4 w-36 h-auto"
            />
            <img
              src={img2}
              alt="Descripción de la imagen 3"
              className="rounded-md w-36 h-[80px]"
            />
          </div>

        </div>

      </div>

    </body>
  )
}

export default Contact