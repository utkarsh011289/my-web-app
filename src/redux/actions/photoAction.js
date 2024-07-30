import sendGetReq from "@/services/ajax";
import { appStore } from "../appStore";

export const photosAction = async () => {

    try{
        const res= await sendGetReq('https://jsonplaceholder.typicode.com/photos')     // await axios.get("https://jsonplaceholder.typicode.com/photos")  
        console.log(res);
        appStore.dispatch( { type:"UPDATE_PHOTOS" , payload: res.data } );
    }
      catch(ex){
    }
      finally{
    }
}