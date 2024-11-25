/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    logo : {
    width:'100%',
    height:'100%',
    },

    icone: {
      alignItems: 'center',
      marginTop: 30,
    },

    iconeImage: {
      width:300,
      height:300,
    },

    logoContainer : {
      width:'100%',
      height:'100%',
      alignItems: 'center',
      marginTop: 50,
    },

    virtualPet: {
      alignItems: 'center',
      marginTop: 50,
    },

    virtualPetImage: {
      width: 413,
      height: 100,
    },
    error: {
      color: "red",
      textAlign: "center",
      marginBottom: 15,
    },
    field: {
      marginBottom: 15,
      width: '70%',
    },


    
    label: {
      marginBottom: 5,
      fontWeight: "bold",
      fontSize: 16,
    },
    input: {
      width: "100%",
      padding: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#FF69B4",
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
      width: 90,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    viewTextCadastro: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
      gap: 10
    },
    viewText: {
      fontSize: 16,
      fontWeight: 500
    },
    viewButton: {
      fontSize: 16,
      color: '#1E90FF',
      fontWeight: 500
    }
  });

export default styles;