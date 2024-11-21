/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React, { useState } from "react";
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image} from "react-native";
import styles from './styles'
import logo from '../../../assets/Trabalho.png'
import icone from '../../../assets/icone.png'
import virtualPet from '../../../assets/virtualPet.png'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/navigation/types";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Dados locais para autenticação
  const validEmail = "admin@example.com";
  const validPassword = "123456";

  const handleLogin = () => {
    // Validação simples
    if (!email || !password) {
    setErrorMessage("Por favor, preencha todos os campos.");
    return;
    }

    setErrorMessage("");

    // Verificando credenciais locais
    if (email === validEmail && password === validPassword) {
      Alert.alert("Login bem-sucedido!", "Bem-vindo ao aplicativo.");
    } else {
      setErrorMessage("E-mail ou senha incorretos.");
    }
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.logo} resizeMode="cover">
        <View style={styles.icone}>
          <Image source={icone} style={styles.iconeImage}/>
        </View>
        <View style={styles.virtualPet}>
          <Image source={virtualPet} style={styles.virtualPetImage}/>
        </View>
    <View style={styles.logoContainer}>


        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <View style={styles.field}>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};



export default Login;
