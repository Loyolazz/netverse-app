import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
            <Button title="Ir para Registro" onPress={() => navigation.navigate('Register')} />
        </View>
    );
}
