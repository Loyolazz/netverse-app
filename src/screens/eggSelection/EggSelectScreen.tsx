import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'EggSelect'>;

export default function EggSelectScreen({ navigation }: Props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>EggSelect Screen</Text>
            <Button title="Ir para Registro" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    );
}
