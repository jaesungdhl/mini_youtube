// React Module
import React from "react";

// Assets
import loadingIcon from "./assets/loading.svg";
import "./assets/RecommendedVideos.css";

const LoadingIcon = props => {
    return (
        <div className="container">
            <img className="loading_icon" src={loadingIcon} alt="loading_icon"/>
        </div>
    )
}

export default LoadingIcon;