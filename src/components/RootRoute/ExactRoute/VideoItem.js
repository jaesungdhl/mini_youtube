// React Module
import React from "react";

// FontAwesome Module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

// Assets
import "./assets/RecommendedVideos.css";

const VideoItem = ({ data, method }) => {
    let viewCount = Number(data.statistics.viewCount);
    if(viewCount < 1000) viewCount = `${data.statistics.viewCount} views`;
    else if(viewCount < 1000000) viewCount = `${(Number(data.statistics.viewCount) / 1000).toFixed(1)}K views`;
    else if(viewCount < 1000000000) viewCount = `${(Number(data.statistics.viewCount) / 1000000).toFixed(1)}M views`;
    else viewCount = `${(Number(data.statistics.viewCount) / 1000000000).toFixed(1)}B views`;

    let datePublished = new Date(Date.parse(data.snippet.publishedAt));
    let currentDate = new Date(Date.now());
    let uploadedString = '';
    if(datePublished.getFullYear() < currentDate.getFullYear()) uploadedString = `${currentDate.getFullYear() - datePublished.getFullYear()} year${currentDate.getFullYear() - datePublished.getFullYear() === 1 ? '' : "s"} ago`;
    else if(datePublished.getMonth() < currentDate.getMonth()) uploadedString = `${currentDate.getMonth() - datePublished.getMonth()} month${currentDate.getMonth() - datePublished.getMonth() === 1 ? "" : "s"} ago`;
    else if(datePublished.getDate() < currentDate.getDate()) uploadedString = `${currentDate.getDate() - datePublished.getDate()} day${currentDate.getDate() - datePublished.getDate() === 1 ? "" : "s"} ago`;
    else if(datePublished.getHours() < currentDate.getHours()) uploadedString = `${currentDate.getHours() - datePublished.getHours()} hour${currentDate.getHours() - datePublished.getHours() === 1 ? "" : "s"} ago`;
    else if(datePublished.getMinutes() < currentDate.getMinutes()) uploadedString = `${currentDate.getMinutes() - datePublished.getMinutes()} minute${currentDate.getMinutes() - datePublished.getMinutes() === 1 ? "" : "s"} ago`;
    else uploadedString = `${currentDate.getSeconds() - datePublished.getSeconds()} second${currentDate.getSeconds() - datePublished.getSeconds() === 1 ? "" : "s"} ago`;

    // console.log(data);

    if(method === "landing") {
        return (
            <div className="video-container">
                <div className="thumbnail-container">
                    <img className="thumbnail-img" src={data.snippet.thumbnails.high.url} alt={data.snippet.thumbnails.default.url} />
                </div>
                <div className="video-description-container">
                    <h5 className="video-title">{data.snippet.title}</h5>
                    <h6 className="channel-name">{data.snippet.channelTitle}</h6>
                    <p className="statistics-container">
                        <span className="viewCount">{viewCount}</span>
                        <span className="scope-container"><FontAwesomeIcon icon={faCircle}/></span>
                        <span className="uploadedAt">{uploadedString}</span>
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="list-container">
                <div className="list-thumbnail-container">
                    <img className="thumbnail-img" src={data.snippet.thumbnails.high.url} alt={data.snippet.thumbnails.default.url} />
                </div>
                <div className="video-description-container" style={{width:"100%", marginLeft: "15px"}}>
                    <h5 className="video-title" style={{fontSize: "18px", width: "100%", marginTop: "5px", height: "28px"}}>{data.snippet.title}</h5>
                    <p className="statistics-container" style={{margin: 0}}>
                        <span className="channel-name">{data.snippet.channelTitle}</span>
                        <span className="scope-container"><FontAwesomeIcon icon={faCircle}/></span>
                        <span className="viewCount">{viewCount}</span>
                        <span className="scope-container"><FontAwesomeIcon icon={faCircle}/></span>
                        <span className="uploadedAt">{uploadedString}</span>
                    </p>
                    <p className="video-description">{data.snippet.description.slice(0,125)}...</p>
                </div>
            </div>
        )
    }
}

export default VideoItem;