import { blue } from '@material-ui/core/colors';
import React from 'react'
import{Link} from "react-router-dom"
import BannerImage from "../assets/girl.jpg";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../styles/Home.css'

function Home() {
    return (
        
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
        <h1 style={{display:'inline-block'}}>Don't Worry.<br/>
            We are here for <br/>
            every solution.
        </h1>
        <p>buswick meh blue bottle pork belly mustache sketchboard 3 wolf <br/>
        moon actually beared single origin coffee</p>
        <Link to="/about">
        <button>Get Started</button>
        </Link>
        <button> watch video
            <PlayArrowIcon/>
            </button>
            
        </div>
        </div>
    )
}

export default Home;
