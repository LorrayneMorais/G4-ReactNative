/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useContext, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
    user: UserProps | null;
    handleLogin: Function;
    handleLogout: Function
    // handleLogin: (data: { name: string; email: string; password: string }) => void;
    isAuthenticated: boolean;
};

type UserProps = {
    name: string,
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<UserProps | null>(null);
    // const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        loadingUser();
    }, [])

    const loadingUser = async () => {
        const response = await AsyncStorage.getItem(
            '@loginApp:user'
        );
        if (response) {
            const data = JSON.parse(response);
            setUser(data);
        }
    }

    const handleLogin = ({name, email, password}: { name: string; email: string; password: string }) => {
        console.log( 'CONTEXT', name, email, password);
        setUser({
            name,
            email,
            password,
        });
        AsyncStorage.setItem(
            '@loginApp:user',
            JSON.stringify({name,email,password,}));
    }

    const handleLogout = async () => {
        setUser(null);
        AsyncStorage.clear();
    }

    return (
        <AuthContext.Provider value={{
            handleLogin,
            user,
            isAuthenticated: !!user,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context
}