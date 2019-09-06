// React Module
import React from "react";

// Component Module
import LoadingIcon from "./LoadingIcon";
import VideoItem from "./VideoItem.js";

const RecommendedVideoList = ({ videoList }) => {
    if(!videoList.status || videoList.status === "Fetching_Video_List") {
        return (
            <div>
                <LoadingIcon />
            </div>
        )
    } else {
        const rendered_list = videoList.data.map( item => <VideoItem key={item.id} data={item} method="landing"/> );

        return (
            <div className="video-list-container">
                {rendered_list}
            </div>
        )
    }
}

export default RecommendedVideoList;