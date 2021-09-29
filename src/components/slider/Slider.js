import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css"
import { Slides } from './slidesInfo';
export const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Tecnologias</h2>
            </div>
            <Carousel
                plugins={['arrows',
                "centered",
                "infinite",
                ]}
                slidesPerPage={7}
                animationSpeed={1000}
                offset={3}
                itemWidth={600}
                slides={Slides}
            />

        </div >
    )
}
