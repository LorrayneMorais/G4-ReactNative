import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    toDoContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        width: 340,
        height: 450,
        marginHorizontal: 50,
        backgroundColor: "#ECB2C7",
        marginBottom: 80,
        borderRadius: 20
      },
      toDoInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20,
        width: 320
      },
      toDoInput: {
        margin: 10,
        borderWidth: 2,
        width: 300,
        height: 50,
        marginTop: 20,
        borderRadius: 20,
        textAlign: 'left',
        backgroundColor: "#A4A3A5",
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10
      },
      toDoAddButton: {
        marginLeft: 10,
        backgroundColor: '#A4A3A5',
        borderRadius: 20,
        padding: 10,
      },
      toDoAddButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      toDoListContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 10,
        borderRadius: 8,
        padding: 10,
      },
      toDoItemContainer: {
        borderWidth: 2,
        margin: 10,
        height: 40,
        width: 300,
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 0,
        backgroundColor: "#F5D6E1",
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    
      },
      toDoItemFirstContent: {
        flexDirection: 'row',
      },
      toDoItemCheckbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#FFFFFF',
      },
      toDoItemCheckmark: {
        fontSize: 25,
        color: '#32CD32',
        fontWeight: 'bold',
      },
      toDoItemtText: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
      },
      toDoItemtTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#888',
      },
      toDoItemDeleteButton: {
        marginLeft: 10,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    
      }, toDoItemDeleteButtonText: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        right: 10
      }

})