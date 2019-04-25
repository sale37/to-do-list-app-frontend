import ApiService from "./ApiService";

class AuthService extends ApiService{

    register(registerDate){
        this.apiClient.post('api/user', registerDate);
    }

    async login(registerDate){
        try{
        const response = await this.apiClient.post('api/auth/login', registerDate);
        this.api.attachHeaders({Authorization: 'Bearer ' + response.data.access_token});
        return true;}
        catch{
            return false;
        }
    }

    checkAuth(){
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        if(!token || !refreshToken){
            return false
        }
        return true;
      }
    
}


export const authService = new AuthService();