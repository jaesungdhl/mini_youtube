const SearchReducer = ( state = { status: null, data: null } , action ) => {
    switch( action.type ) {
        case "Fetched_Search_Query_Data" :
            console.log(state);
            return {...state, status: action.type, data: action.payload };
        default :
            return state;
    }
}

export default SearchReducer;