// src/screens/login/styles.ts
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    logo: {
        fontSize: 32,
        color: '#00ffff',
        // Define fonte de forma adequada para cada plataforma
        fontFamily: Platform.select({ ios: 'Courier', android: 'monospace', default: 'Courier' }),
        textAlign: 'center',
        marginBottom: 40,
        textShadowColor: '#00ffff88',
        textShadowRadius: 6,
    },
    input: {
        borderColor: '#00ffff',
        borderWidth: 1,
        borderRadius: 4,
        color: '#00ffff',
        padding: 12,
        marginBottom: 16,
        fontFamily: Platform.select({ ios: 'Courier', android: 'monospace', default: 'Courier' }),
    },
    button: {
        backgroundColor: '#00ffff',
        padding: 12,
        borderRadius: 4,
        marginBottom: 12,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
