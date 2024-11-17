import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    navText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007BFF",
    },
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    weekDayText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    daysContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    day: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#F5F5F5",
        borderRadius: 5,
    },
    dayText: {
        fontSize: 16,
    },
});

export default styles;
