import ApiService from "./ApiService";

class AuthService extends ApiService{

    register(registerDate){
        this.apiClient.post('api/user', registerDate);
    }

    login(registerDate){
        this.apiClient.post('api/auth/login', registerDate);
    }
}

export const authService = new AuthService();