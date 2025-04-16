// src/api/authLogic.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Constants from 'expo-constants';

// Tenta obter a URL base das variáveis de ambiente definidas no app.json/expo.
// Caso não esteja definida, utiliza um fallback padrão.
const API_BASE_URL = Constants.manifest?.extra?.apiBaseUrl || 'http://192.168.0.72:3002';

const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Envia uma requisição de login para a API.
 *
 * @param email - Email do usuário.
 * @param password - Senha do usuário.
 * @returns Promise com a resposta Axios.
 */
export const loginRequest = (email: string, password: string): Promise<AxiosResponse> => {
    return apiClient.post('/auth/login', { email, password });
};

export default apiClient;
