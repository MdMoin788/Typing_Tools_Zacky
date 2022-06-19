import React from 'react'

import TypingShows from "../../src/Styles/TypingShow.module.css"

const Navbar = () => {
    return (
        <div className={TypingShows.navbarHome} >
            <div>Home</div>
            <div>Learn Typing</div>
            <div>Check Typing Speed</div>
            <div> Compete With Others</div>
        </div>
    )
}
export default Navbar
