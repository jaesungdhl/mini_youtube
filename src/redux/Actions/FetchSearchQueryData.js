// Import Axios Module
import Axios from "axios";

const FetchSearchQueryData = query => async ( dispatch ) => {
    console.log(query);
    let response = await Axios.get("https://www.googleapis.com/youtube/v3/search" , { 
        params: {
            q: query,
            part: "snippet",
            key: "AIzaSyANp21O_GwiT-tBrgZmramLu8sypyXXMvI",
            maxResults: 20,
        }
    })
    .catch( error => console.log(error));
    dispatch({ type: "Fetched_Search_Query_Data", payload: response.data.items });
}

export default FetchSearchQueryData;