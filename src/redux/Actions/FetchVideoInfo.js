// Axios Module
import Axios from "axios";

const FetchVideoInfo = videoId => async (dispatch) => {
    let response = await Axios.get("https://www.googleapis.com/youtube/v3/videos" , { 
        params: {
            part: "snippet,statistics",
            id: videoId,
            key: "AIzaSyANp21O_GwiT-tBrgZmramLu8sypyXXMvI"
        }
    })
    .catch( error => console.log(error));
    dispatch({ type: "Fetched_Video_Info" , payload: response.data.items });
}

export default FetchVideoInfo;