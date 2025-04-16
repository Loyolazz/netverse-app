// src/utils/authLogic.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest } from '../api/auth';

/**
 * Interface que representa a resposta esperada do endpoint de login.
 */
export interface LoginResponse {
    access_token: string;
}

/**
 * Executa a lógica de login:
 * 1. Envia as credenciais para a API.
 * 2. Verifica se o token foi retornado.
 * 3. Armazena o token no AsyncStorage para uso futuro.
 *
 * @param email - Email do usuário.
 * @param password - Senha do usuário.
 * @returns Promise que resolve com o token de acesso.
 * @throws Erro se o token não for retornado ou se ocorrer alguma falha na requisição.
 */
export async function handleLoginLogic(email: string, password: string): Promise<string> {
    try {
        const response = await loginRequest(email, password);
        const data: LoginResponse = response.data;

        if (!data?.access_token) {
            throw new Error('Resposta inválida: access token não encontrado');
        }

        await AsyncStorage.setItem('access_token', data.access_token);
        return data.access_token;
    } catch (error: any) {
        // Propaga mensagens de erro detalhadas se disponíveis
        throw new Error(
            error?.response?.data?.message || error?.message || 'Erro desconhecido durante o login'
        );
    }
}

/**
 * Realiza o logout removendo o token do AsyncStorage.
 *
 * @returns Promise que se resolve quando o token é removido.
 * @throws Erro se ocorrer algum problema na remoção do token.
 */
export async function handleLogoutLogic(): Promise<void> {
    try {
        await AsyncStorage.removeItem('access_token');
    } catch (error: any) {
        throw new Error(error?.message || 'Erro desconhecido durante o logout');
    }
}