// src/screens/dashboard/DashboardScreen.tsx
import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { handleLogoutLogic } from '../../utils/authLogic';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
    const [loading, setLoading] = useState(false);

    const onLogout = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        try {
            // Chama a função de logout que remove o token
            await handleLogoutLogic();
            console.log('Logout realizado com sucesso');
            // Reinicia a navegação para a tela de login
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error: any) {
            console.error('Erro durante o logout:', error.message);
            Alert.alert('Erro', error.message);
        } finally {
            setLoading(false);
        }
    }, [loading, navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>

            {/* Botão de Logout embutido na tela */}
            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={onLogout}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Saindo...' : 'Logout'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF0000', // Cor vermelha para indicar logout
        padding: 12,
        borderRadius: 4,
        marginTop: 12,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
