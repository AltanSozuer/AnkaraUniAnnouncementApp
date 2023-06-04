import { UserWithPass } from "../models/User";

export default class UserService {

    constructor( authAxios ) {
        this.authAxios = authAxios;
    }
   
    /**
     * Gets user information from server by API call
     * @async
     * @returns Promise<UserWithPass>
     */
    async getUserInfo() {
        try{
            const userInfo = this.authAxios.post('/user')
                .then(({data}) => {
                    return new UserWithPass(data.data);
                })
                .catch(err => {
                    console.log('getUserInfo error details: ',JSON.stringify(err))
                    console.log('getUserInfo error: ',err)
                })
            return userInfo;
        }
        catch(err) {
            console.log('getUserInfo is failed: ',err)
        }
    }
}