import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'transparent',
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    topPag: {
        width: "100%",
        height: 85,
        alignItems: "center",
    },

    topPagContent: {
        borderColor: "black",
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: 10,
        paddingBottom: 16,
        paddingHorizontal: 35,
    },

    topPagContentText: {
        width: 230,
        height: 65,
        shadowColor: '#fff',  // Cor da sombra
        shadowOffset: { width: 0, height: 3 },  // Distância da sombra
        shadowOpacity: 1,  // Opacidade da sombra
        shadowRadius: 5,  // Desfoque da sombra
    },

    gif: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },

    calendar: {
        marginVertical: 20,
    },

    compromissosContainer: {
        flex: 1,
    },

    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    noCompromissos: {
        textAlign: 'center',
        color: 'gray',
        marginTop: 10,
    },

    compromissoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },

    botaoAdicionar: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'pink',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        fontSize: 20,
        color: 'white',
    },

    modalContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
    },
});
