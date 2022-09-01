import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "./lib/hooks/redux";

import HomeScreen from "./screens/home/HomeScreen";
import MainScreen from "./screens/authorization/main/MainScreen";
import AuthScreen from "./screens/authorization/auth/AuthScreen";

export type RootStackParamList = {
    Main: undefined;
    Auth: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
    const { user } = useAppSelector((state) => state.auth);
    const isAuth = !!user.token;

    if (isAuth)
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Main"}>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
