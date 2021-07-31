import React from 'react'
import logo from "../assets/logo-4.png"
import{Link} from "react-router-dom"

import '../styles/Navbar.css'
import { blue } from '@material-ui/core/colors'
function Navbar() {
    
    return (
        <div className="navbar">
        <div className="leftside">
        <img src={logo} />

        
        </div>
        
        <div className="rightside">
            <Link to="/">Integrtion</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <button>Get Early Acess
            
            </button>

        </div>
            
        </div>
    )
}

export default Navbar
