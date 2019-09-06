// React Module
import React from "react";

// React-redux Module
import { connect } from "react-redux";

// Component Module
import VideoItem from "../../RootRoute/ExactRoute/VideoItem";

// Actions
import FetchVideoInfo from "../../../redux/Actions/FetchVideoInfo";

// Assets
import "./assets/SearchedList.css";

class SearchedVideoList extends React.Component {
    
    componentDidMount() {
        this.props.FetchVideoInfo( this.props.videoList );
    }

    render() {
        if( !this.props.fetchedInfo.data ) {
            return <div></div>
        } else {
            const rendered_list = this.props.fetchedInfo.data.map( item => <VideoItem key={item.id} data={item} method="search"/>);
            return (
                <div className="item-container">
                    { rendered_list }
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    console.log(state, "searchVideoList");
    return {
        fetchedInfo: state.fetchedVideoInfo
    }
}

export default connect( mapStateToProps, { FetchVideoInfo })( SearchedVideoList );