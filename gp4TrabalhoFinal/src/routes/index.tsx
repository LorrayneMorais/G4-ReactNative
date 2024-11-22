/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { NavigationContainer } from "@react-navigation/native"
import { MyTabs } from "./MyTabs/MyTabs"
import { Home } from "../screens/home"
import { Tarefas } from "../screens/tarefas"
import Cadastro from "../screens/Cadastro"
import Compromisso from "../screens/compromissos/Compromisso"
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from "./navigation/types"
import { useAuth } from "../context"
import Login from "../screens/Login"

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
    const { user, isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated? "Home": "Login"} screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <>
                    <Stack.Screen
                        name="MyTabs"
                        component={MyTabs}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="Tarefas"
                        component={Tarefas}
                    />
                    <Stack.Screen
                        name="ListaCompromisso"
                        component={Compromisso}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Cadastro"
                        component={Cadastro}
                    />
                </>
            )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
