import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerPet: {
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPetMain: {
        borderWidth: 9,
        borderRadius: '50%',
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 22,
    },
    gif: {
        width: 250,
        height: 250,
        resizeMode: "contain"
    }
})
