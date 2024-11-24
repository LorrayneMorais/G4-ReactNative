import { View, Image, ImageBackground } from "react-native"
import { styles } from "./styles"
import images from "../Images"

export const SmallPet = () => {
    return (
        <View style={styles.containerPet}>
            <ImageBackground source={images.backgroundPet} style={styles.containerPetMain}>
                <Image source={require('../../../assets/gifs/gifNormalbdNew.gif')} style={styles.gif} resizeMode="contain" />
            </ImageBackground>
        </View>
    )
}