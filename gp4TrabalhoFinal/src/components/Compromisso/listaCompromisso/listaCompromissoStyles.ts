import { StyleSheet } from 'react-native';

export interface Compromisso {
    id: number;
    nome: string;
    dia: string;
    horario: string;
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    compromissoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    botaoAdicionar: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007bff',
        borderRadius: 50,
        padding: 20,
    },
    icon: {
        color: '#fff',
        fontSize: 30,
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
});
