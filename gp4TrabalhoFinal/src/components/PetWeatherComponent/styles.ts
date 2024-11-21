import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPetMain: {
        borderWidth: 20,
        borderColor: '#FFC1D8',
        borderRadius: 300,
        width: 330,
        height: 330,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 22,
      },
      sunGifMode: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 150,
        height: 150,
        zIndex: -1
      },
      rainGifMode: {
        position: 'absolute',
        width: 350,
        height: 350,
        zIndex: -1
      },
      cloudGifMode: {
        position: 'absolute',
        top: -120,
        width: 320,
        height: 320,
        zIndex: -1
      },
})