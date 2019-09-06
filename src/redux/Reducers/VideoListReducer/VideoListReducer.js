const VideoListReducer = ( state = { status: null, data: null } , action ) => {
    switch( action.type ) {
        case "Fetched_Video_List":
            console.log(state);
            return { ...state, status: action.type, data: action.payload } ;
        default:
            return state;
    }
}

export default VideoListReducer;