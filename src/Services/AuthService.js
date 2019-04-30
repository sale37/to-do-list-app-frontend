import ApiService from "./ApiService";
const ENDPOINTS = {REGISTER:'api/user',LOGIN:''}

class AuthService extends ApiService{

    register = (registerData) =>{
        return this.apiClient.post('api/user', registerData);

    };

    async login(registerData){
        try{
        const response = await this.apiClient.post('api/auth/login', registerData);
        this.api.attachHeaders({Authorization: `Bearer ${response.data.access_token}`});
        localStorage.setItem('token', response.data.access_token);
        return true;}
        catch{
            return false;
        }
    };

    async logout() {
        await this.apiClient.post('api/auth/logout');
        localStorage.removeItem('token');
        this.api.removeHeaders(['Authorization']);
    };

    listTodos = () => {
      
        return this.apiClient.get('api/todos');
    }

    checkAuth=()=>{
        const token = localStorage.getItem('token');
        if(!token){
            return true;
        }
        return false;
      }
    
};


export const authService = new AuthService();