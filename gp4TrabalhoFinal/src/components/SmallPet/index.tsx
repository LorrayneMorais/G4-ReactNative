import { View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"

export const SmallPet = () => {
    return (
        <View style={styles.containerPet}>
            <ImageBackground source={require('../../../assets/backgroundPet.png')} style={styles.containerPetMain}>
                <Image source={require('../../../assets/gifs/gifNormalbdNew.gif')} style={styles.gif} resizeMode="contain" />
            </ImageBackground>
        </View>
    )
}