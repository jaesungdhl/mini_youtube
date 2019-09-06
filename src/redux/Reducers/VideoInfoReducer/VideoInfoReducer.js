const VideoInfoReducer = ( state = { status: null, data: null } , action ) => {
    switch( action.type ) {
        case "Fetched_Video_Info" :
            console.log(state);
            return {...state, status: action.type, data: action.payload };
        default :
            return state;
    }
}

export default VideoInfoReducer;