import axios from "axios";

export default function getApiCall(url){

    axios.get(url).then(response=>{
       return response
    }).catch(error=>{
        return error
    })
}