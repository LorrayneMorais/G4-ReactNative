import { View, Image } from "react-native"
import { styles } from "./styles"

export const SmallPet = () => {
    return (
        <View style={styles.containerPet}>
            <View style={styles.containerPetMain}>
                <Image source={require('../../../assets/gifs/normal.gif')} style={styles.gif} resizeMode="contain" />
            </View>
        </View>
    )
}