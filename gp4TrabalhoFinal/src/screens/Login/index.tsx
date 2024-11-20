/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React, { useState } from "react";
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import styles from './styles'

const LoginPage: React.FC = () => {
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
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Senha</Text>
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
    </View>
  );
};

export default LoginPage;
