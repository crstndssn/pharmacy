import React from "react";
import img11 from '../images/pharimg.jpg'
import img2 from '../images/davilogo.jpg'
import img3 from '../images/nequilogo.jpg'
import img4 from '../images/pselogo.jpg'
import img5 from '../images/facebook.png'
import img6 from '../images/youtube.png'
import img7 from '../images/x.png'
import img8 from '../images/instagram.png'

const About = () => {
    return (
        <body>
            <div class="bg-black text-white py-1"></div>
            <div class="flex items-center">
                <h1 class="text-6xl font-bold mr-4 ml-20 mt-10">Quienes somos</h1>
            </div>
            <div className="flex justify-center">
                <h3 className="mt-8 ml-32 mr-32 max-w-full text-justify">¡Bienvenido a nuestra droguería!

                    En Pharmacy, nos enorgullece ser tu destino confiable para todas tus necesidades de productos farmacéuticos y de cuidado personal. Desde nuestros modestos comienzos, hemos crecido para convertirnos en un pilar de la comunidad, brindando productos de calidad y un servicio excepcional a nuestros clientes.

                    Nos comprometemos a mantener los más altos estándares de calidad y seguridad en todos nuestros productos. Trabajamos en estrecha colaboración con proveedores de confianza y seguimos estrictamente todas las regulaciones y pautas de la industria para garantizar la seguridad y eficacia de cada producto que ofrecemos.

                    Además de nuestro compromiso con la excelencia en productos y servicio al cliente, también estamos profundamente arraigados en nuestra comunidad. Creemos en devolver a aquellos que nos han apoyado a lo largo de los años, y nos comprometemos a participar en iniciativas y eventos locales que beneficien a nuestra comunidad.

                    En Pharmacy, nos esforzamos por ser más que una simple droguería; somos tu socio en el camino hacia una vida más saludable y feliz. Esperamos servirte y apoyarte en cada paso del camino.

                    ¡Gracias por elegir Pharmacy como tu destino de salud y bienestar!</h3>
            </div>
            <div className="flex justify-center mt-10">
                <img
                    src={img11}
                    alt=""
                    className="rounded w-96 h-auto"
                />
            </div>

            <div class="mt-16 bg-black text-white py-1">
            </div>

            <div className="container mx-auto flex flex-column md:flex-row justify-between items-center">
                <div>
                    <h3 class="font-bold mb-6">Siguenos para más novedades</h3>
                    <div className="flex gap-4">
                        <a className="hover:font-medium" rel="noreferrer" target="_blank" href="https://www.facebook.com/"><img src={img5} alt="" className="w-8" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/"><img src={img6} alt="" className="w-8" /></a>
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/?lang=es"><img src={img7} alt="" className="w-8" /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><img src={img8} alt="" className="w-8" /></a>
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

export default About