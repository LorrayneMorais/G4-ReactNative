import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "./styles";
import images from "../Images";
import { useAuth } from "../../context";

export const Header = () => {
    const { hungerLevel, waterLevel } = useAuth();
    return (
        <>
            <ImageBackground source={images.backgroundLogopngwhite} style={styles.topPag}>
                <View style={styles.topPagContent}>
                    <Image source={images.virtualPet} style={styles.topPagContentText}></Image>
                </View>
            </ImageBackground>
            <View style={styles.topPagBarsFoodAndWater}>
                <View style={styles.topPagBarsFood}>
                    <View style={[styles.topPagBarsFoodBlockOne, { backgroundColor: hungerLevel >= 1 ? "orange" : "white" }]} />
                    <View style={[styles.topPagBarsFoodBlockTwo, { backgroundColor: hungerLevel >= 2 ? "orange" : "white" }]} />
                    <View style={[styles.topPagBarsFoodBlockThree, { backgroundColor: hungerLevel >= 3 ? "orange" : "white" }]} />
                    <View style={[styles.topPagBarsFoodBlockFour, { backgroundColor: hungerLevel >= 4 ? "orange" : "white" }]} />
                </View>
                <View style={styles.topPagBarsWater}>
                    <View style={[styles.topPagBarsWaterBlockOne, { backgroundColor: waterLevel >= 4 ? "#1CD4E9" : "white" }]} />
                    <View style={[styles.topPagBarsWaterBlockTwo, { backgroundColor: waterLevel >= 3 ? "#1CD4E9" : "white" }]} />
                    <View style={[styles.topPagBarsWaterBlockThree, { backgroundColor: waterLevel >= 2 ? "#1CD4E9" : "white" }]} />
                    <View style={[styles.topPagBarsWaterBlockFour, { backgroundColor: waterLevel >= 1 ? "#1CD4E9" : "white" }]} />
                </View>
            </View>
        </>
    )
}