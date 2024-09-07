import axios from "axios";

const API_URL = process.env.SERVER_LINK || "http://localhost:5342"; ;


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