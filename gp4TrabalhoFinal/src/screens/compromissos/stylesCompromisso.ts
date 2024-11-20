import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    gif: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    compromissoItem: {
        backgroundColor: '#f4f4f4',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    compromissoAnimado: {
        marginTop: 20,
        alignSelf: 'center',
    },
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    botaoAdicionar: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'pink',
        padding: 15,
        borderRadius: 50,
    },
    icon: {
        fontSize: 30,
        color: '#fff',
    },
    calendar: {
        marginVertical: 20,
    },
    compromissosContainer: {  // Adicionando este estilo
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    noCompromissos: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
    },
});
