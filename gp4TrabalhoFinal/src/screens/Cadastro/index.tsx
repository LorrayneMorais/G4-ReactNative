/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from "react-native";
import logo from '../../../assets/Trabalho.png'
import icone from '../../../assets/icone.png'
import virtualPet from '../../../assets/virtualPet.png'
import { styles } from "./styles";
import iconvisible from "../../../assets/eye.png";
import iconinvisible from "../../../assets/hidden.png";
import { useAuth } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/navigation/types";
import { registerUser } from "../../api/api";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;
const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin } = useAuth();
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handleCadastro = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    await registerUser({ name, email, password });
    handleLogin({
      name,
      email,
      password
    });
  };
  const navigationLogin = () => {
    navigation.navigate('Login')
  }
  return (

    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.logo} resizeMode="cover">
        <View style={styles.icone}>
          <Image source={icone} style={styles.iconeImage} />
        </View>
        <View style={styles.virtualPet}>
          <Image source={virtualPet} style={styles.virtualPetImage} />
        </View>
        <View style={styles.logoContainer}>


          <TextInput
            style={styles.input}

            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}

          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? (
              <Image source={iconvisible} style={styles.iconvisiblestyle} />) : (
              <Image source={iconinvisible} style={styles.iconvisiblestyle} />)
            }</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}

          />
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}


          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.viewTextLogin} >
            <Text style={styles.viewText}>Já possui conta?</Text>
            <TouchableOpacity onPress={navigationLogin}>
              <Text style={styles.viewButton}>
                Faça Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>

  );
};
export default Cadastro;