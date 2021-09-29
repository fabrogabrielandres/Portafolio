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
                    "infinite",
                    "centered",
                ]}
                slidesPerPage={3}
                animationSpeed={200}
                offset={50}
                itemWidth={400}
                slides={Slides}
            />

        </div >
    )
}
