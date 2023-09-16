import { usePostData} from "../hooks/requestHooks.js";
const BASE_API_URL = "http://localhost:8080/user"
class UserService {
    constructor() {
        if (!UserService.instance) {
            UserService.instance = this;
        }
        return UserService.instance;
    }
    login(){

        return usePostData(BASE_API_URL+"/login");
    }
}

export default new UserService();

