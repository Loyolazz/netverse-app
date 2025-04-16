// src/screens/login/LoginScreen.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import styles from './styles';
import { handleLoginLogic } from '../../utils/authLogic';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        console.log('Iniciando login com:', { email, password });

        try {
            const token = await handleLoginLogic(email, password);
            console.log('Token salvo com sucesso:', token);
            navigation.replace('EggSelect');
        } catch (error: any) {
            console.error('Erro durante o login:', error.message);
            Alert.alert(
                'Erro de Login',
                'Não foi possível efetuar login. Verifique suas credenciais ou a conexão com o servidor.'
            );
        } finally {
            setLoading(false);
        }
    }, [email, password, loading, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>NETVERSO.EXE</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#00ffffaa"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#00ffffaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Entrar'}</Text>
            </TouchableOpacity>
        </View>
    );
}
