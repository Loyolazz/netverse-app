import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import EggSelectScreen from '../screens/eggSelection/EggSelectScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    EggSelect: undefined;
    Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="EggSelect" component={EggSelectScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
