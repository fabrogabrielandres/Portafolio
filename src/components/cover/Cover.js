import React from 'react'
import video from "../../media/a3.mp4"
import "./Cover.css"


export const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={video} autoPlay loop muted/>
            <h1>Fabro Gabriel Andres</h1>
            <p>Front End Developer</p>
            
        </div>
    )
}
