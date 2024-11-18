import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Estilos do container principal
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
    },

    gif: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },

    // Cabeçalho do calendário
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    navText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#007AFF",
    },
    // Dias da semana
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    weekDayText: {
        flex: 1,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "#666",
    },
    // Dias do mês
    daysContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    day: {
        width: "13%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
    },
    dayText: {
        fontSize: 16,
        color: "#333",
    },
    // Estilos para compromissos
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
    icon: {
        fontSize: 30,
        color: "#ffffff",
        fontWeight: "bold",
    },
    // Modal para adicionar compromisso
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
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 10,
        padding: 5,
    },
});
