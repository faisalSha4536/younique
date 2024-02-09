import React, { useEffect } from 'react'
import '../App.scss'
import Clock from './Clock';
import gsap from 'gsap';

const Navbar = () => {

    useEffect(()=>{
        const tl1 = gsap.timeline()

        tl1.to('.logo_side h1',{opacity: 1, duration: 1, delay: .5}, 'a')
        tl1.to('.logo_side p',{opacity: 1, duration: 1, delay: .5}, 'a')
    },[])

    return (
        <div id='navbar'>
        <div className="logo_side">
            <h1 style={{opacity: 0}}>younique</h1><p style={{opacity: 0}}>TM</p> 
        </div>
        <div className="mid_menu">
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
        </div>
        <div className="last">
            <p>Vilnius(GMT+2)</p>
            <p><Clock/></p>
        </div>
        </div>
    )
}

export default Navbar