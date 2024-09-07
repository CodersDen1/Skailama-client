import axios from "axios";

const API_URL = "https://skailama-server-9mh79.ondigitalocean.app/";


export class UserApi {
    async buttonClicked(){
        try{
            const response = await axios.get(API_URL);

            return response.data;
            }
            catch(err){
                console.error(err);
    }

}
}

const userApi = new UserApi();
export default userApi;