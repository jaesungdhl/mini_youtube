// React Module
import React from "react";

// React-redux Module
import { connect } from "react-redux";

// Component Module
import LoadingIcon from "../../RootRoute/ExactRoute/LoadingIcon";
import SearchedVideoList from "./SearchedVideoList";


class SearchedList extends React.Component {


    render() {
        if( !this.props.searchResults.data ) {
            return (
                <div>
                    <LoadingIcon />
                </div>
            )
        } else {
            let videoListId = this.props.searchResults.data.map( item => item.id.videoId ).filter( id => id).join(",");
            
            return (
                <div className="search-list-container">
                    <SearchedVideoList videoList={ videoListId } />
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    console.log(state, "SearchedList");
    return {
        searchResults : state.fetchedQueryList,
    }
}

export default connect( mapStateToProps )( SearchedList );