import React from 'react'
import "./NavBar.css"

export const NavBar = ({ isScrolling }) => {
    
    const toTheTop = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    return (
        <nav className={`navbar ${isScrolling > 540 ? "isScrolling" : null}`}>
            <div onClick={toTheTop} className="navbar-logo">
                Gabriel
            </div>
        </nav>

    )
}
