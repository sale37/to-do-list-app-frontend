import ApiService from "./ApiService";
const ENDPOINTS = {REGISTER:'api/user',LOGIN:''}

class AuthService extends ApiService{

    constructor(){
        super();
        this.api.attachHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`});
    }

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
        try{
        await this.apiClient.post('api/auth/logout');
        localStorage.removeItem('token');
        this.api.removeHeaders(['Authorization']);
        }catch{
            return false;
        }
    };

    listTodos = () => {
        return this.apiClient.get('api/todos');
    }

    createTodo = (registerData) => {
        // this.api.attachHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`});
        console.log(registerData.data);
        return this.apiClient.post('api/todos', registerData);
    }

    showTodo = (id) => {
        // this.api.attachHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`});
        return this.apiClient.get(`/api/todos/${id}`);
    }

    deleteTodo = (id) => {
        return this.apiClient.delete(`/api/todos/${id}`);
    }

    updateTodo = (registerData) => {
        return this.apiClient.patch(`/api/todos/${registerData.id}`, registerData);
    }

    isLoggedIn=()=>{
        const token = localStorage.getItem('token');
        if(token){
            return true;
        }
        return false;
      }
    
};


export const authService = new AuthService();