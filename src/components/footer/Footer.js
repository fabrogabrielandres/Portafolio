import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Gabriel</h1>
                <p>Paraná Entre Rios Argentina</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/fabro-gabriel-b9b289211/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/fabrogabrielandres" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.instagram.com/gabifabro/?hl=es-la" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
