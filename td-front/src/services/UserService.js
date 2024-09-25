import {url} from "../../utils";
import axios from "axios";

class UserService {
    
    createUser(data){
    const API_BASE_URL = `${url}`;
    return axios.get(API_BASE_URL,data);
    }

    getUserById(userId){

    }

    updateUser(id, data){

    }

    deleteUser(uidUser){

    }

    getAllUsers(){
        
    }
}

export default new UserService();