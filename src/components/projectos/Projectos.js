import React from 'react';
import "./Projectos.css"
import im1 from "./1.png"

const proj = [
    {
        img: im1,
        url: "https://pelis-series.vercel.app/search",
        nombre: "Peliculas App"
    },
    {
        img: im1,
        url: "https://weathermap-api.vercel.app/",
        nombre: "Weather App"
    },
    {
        img: im1,
        url: "https://pelis-series.vercel.app/search",
        nombre: "Peliculas App"
    }, {
        img: im1,
        url: "https://pelis-series.vercel.app/search",
        nombre: "Peliculas App"
    }, {
        img:im1,
        url:"https://pelis-series.vercel.app/search",
        nombre:"Peliculas App"
    }, {
        img:im1,
        url:"https://pelis-series.vercel.app/search",
        nombre:"Peliculas App"
    },

]


export const Projectos = () => {
    return (
        <div
            className="contenedor"
        >
            {
                proj.map((p, idx) => {
                    return (

                        <div
                            className="card"
                            key={idx}
                        >
                            <h1>{p.nombre}</h1>

                            <img src={p.img} alt="img" />
                        </div>
                    )
                })
            }


        </div>
    )
}
