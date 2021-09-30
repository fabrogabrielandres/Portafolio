import React from 'react'
import imagen from "./8.jpg"
import "./About.css"

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>giladas</h3>
                <p> otras gilad fdasfdasdsaf adsfdfsafdsa asdfadsfdas adsffdsadafs
                    fvasdfbvcxzvbxcf
                    adsffdsa sdgfas   aaaaaaaa</p>
            </div>
            <div className="about-img">
                <img src={imagen} alt="about" />
            </div>

        </div>
    )
}
