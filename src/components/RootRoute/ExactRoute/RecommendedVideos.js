// React Module
import React from "react";

// React-redux Module
import { connect } from "react-redux";

// Action Creators
import { FetchVideoListData } from "../../../redux/Actions/index";

// Component Module
import RecommendedVideoList from "./RecommendedVideoList";

// Assets
import "./assets/RecommendedVideos.css";

class RecommendedVideos extends React.Component {
    
    componentDidMount() {
        setTimeout(() => this.props.FetchVideoListData(), 1000);
    }

    render() {
        return (
            <div className="container">
                <h4 className="section-title">Recommended</h4>
                <RecommendedVideoList videoList={ this.props.videoList }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state, "RecommendedVideos");
    return {
        videoList: state.fetchedVideoList
    }
}

export default connect( mapStateToProps, { FetchVideoListData } )(RecommendedVideos);