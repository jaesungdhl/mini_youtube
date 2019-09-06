// React Module
import React from "react";

// React-router Module
import { Link } from "react-router-dom";

// Assets
import YoutubeLogo from "./assets/yt_logo_rgb_light.png";
import "./assets/Navbar.css";

const Logo = () => {
    return (
        <div className="logo_container">
            <Link to="/"><img className="youtube_logo" src={YoutubeLogo} alt="youtube_logo" /></Link>
        </div>
    )
}

export default Logo;