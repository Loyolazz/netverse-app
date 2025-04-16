import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation';
import {
    useFonts,
    PressStart2P_400Regular,
} from '@expo-google-fonts/press-start-2p';
import * as SplashScreen from 'expo-splash-screen';

const queryClient = new QueryClient();

export default function App() {
    // Carrega a fonte personalizada
    const [fontsLoaded] = useFonts({
        PressStart2P_400Regular,
    });

    // Previne o auto hide do splash logo ao iniciar o app
    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    // Esconde o splash quando as fontes são carregadas
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Enquanto as fontes não carregam, renderiza nada (pode ser um fallback)
    if (!fontsLoaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <AppNavigator />
        </QueryClientProvider>
    );
}
