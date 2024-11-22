/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import React, { useState } from "react";
import {StyleSheet,View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, GestureResponderEvent} from "react-native";
import styles from './styles'
import logo from '../../../assets/Trabalho.png'
import icone from '../../../assets/icone.png'
import virtualPet from '../../../assets/virtualPet.png'
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/navigation/types";
import { api } from "../../api/api";
import { useNavigation } from "@react-navigation/native";
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sucessMessage, setSucessMessage] = useState<string>("");
  const navigation = useNavigation<HomeScreenNavigationProp>()
  
  
  const handleLogin = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const response = await api.get('/Users',{
        params:{email: email, password: password},
      });
      console.log('response:',response);

    if (response.status === 200) {
      if (response.data.length=== 1){
        const user = response.data[0];
        if (user.email===email&& user.senha===password){
          setSucessMessage('Usuário logado com sucesso');
          console.log('Usuário logado com sucesso')
          setTimeout(()=>{
            navigation.navigate('MyTabs')
          },1000)
        }else{
          setSucessMessage ('Email ou senha incorretos')
        }
      }else{
        setSucessMessage ('Email ou senha incorretos')
    }
    }else{
      setErrorMessage('Erro ao logar');
    }

  }catch(error){
    console.error('Erro ao fazer o login', error);
    setSucessMessage('Erro ao fazer o login');
  }
  }

  const navigationCadastro=()=> {
    navigation.navigate('Cadastro')
  }

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
        <TouchableOpacity style={styles.button} onPress={navigationCadastro}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};



export default Login;
