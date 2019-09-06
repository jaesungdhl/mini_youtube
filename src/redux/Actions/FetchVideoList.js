// Import Axios Module
import Axios from "axios";

const FetchVideoListData = () => async ( dispatch ) => {
     let response = await Axios.get("https://www.googleapis.com/youtube/v3/videos" , {
        params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            maxResults: 20,
            key: "AIzaSyANp21O_GwiT-tBrgZmramLu8sypyXXMvI"
        }
    }).catch(error => console.log(error) );
    dispatch({ type: "Fetched_Video_List", payload: response.data.items })
}

export default FetchVideoListData;