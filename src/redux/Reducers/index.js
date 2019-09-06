// Redux Module
import { combineReducers } from "redux";

// Reducer Module
import SearchReducer from "./SearchReducer/SearchReducer";
import VideoListReducer from "./VideoListReducer/VideoListReducer";
import VideoInfoReducer from "./VideoInfoReducer/VideoInfoReducer";

export default combineReducers({
    fetchedQueryList: SearchReducer,
    fetchedVideoList: VideoListReducer,
    fetchedVideoInfo: VideoInfoReducer
})