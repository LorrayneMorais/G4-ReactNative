// stylesCompromisso.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Estilo do container principal
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
    },
    // Estilo para a imagem GIF
    gif: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },
    // Estilo do item de compromisso (cada item na lista)
    compromissoItem: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    // Estilo do botão flutuante de adicionar compromisso
    botaoAdicionar: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        backgroundColor: "#007AFF",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
    },
    // Estilo do ícone do botão flutuante
    icon: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "bold",
    },
    // Estilo do modal onde o usuário insere o novo compromisso
    modalContainer: {
        position: "absolute",
        top: "30%",
        left: "10%",
        right: "10%",
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 8,
        elevation: 4,
    },
    // Estilo dos campos de entrada de texto (inputs)
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 10,
        padding: 5,
    },
});
