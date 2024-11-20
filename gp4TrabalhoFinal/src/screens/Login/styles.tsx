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
      backgroundColor: "#f0f2f5",
    },
    form: {
      width: "90%",
      maxWidth: 400,
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },
    error: {
      color: "red",
      textAlign: "center",
      marginBottom: 15,
    },
    field: {
      marginBottom: 15,
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
      borderRadius: 5,
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default styles;