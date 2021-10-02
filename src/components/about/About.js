import React from 'react'
import imagen from "./8.jpg"
import "./About.css"

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Desarrollador Front End</h3>
                <p>Curioso entusiasta, apasionado por la tecnología, todos los días buscando 
                    algo nuevo que sumar a mis conocimientos técnicos...trabajando duro por mejorar dia a dia... </p>
            </div>
            <div className="about-img">
                <img src={imagen} alt="about" />
            </div>

        </div>
    )
}
