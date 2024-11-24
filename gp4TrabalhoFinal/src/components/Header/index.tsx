import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "./styles";
import images from "../Images";

export const Header = () => {
    return (
        <>
        <ImageBackground source={images.backgroundLogopngwhite} style={styles.topPag}>
            <View style={styles.topPagContent}>
                <Image source={images.virtualPet} style={styles.topPagContentText}></Image>
            </View>
        </ImageBackground>
            <View style={styles.topPagBarsFoodAndWater}>
                <View style={styles.topPagBarsFood}>
                    <View style={styles.topPagBarsFoodBlockOne}></View>
                    <View style={styles.topPagBarsFoodBlockTwo}></View>
                    <View style={styles.topPagBarsFoodBlockThree}></View>
                    <View style={styles.topPagBarsFoodBlockFour}></View>
                </View>
                <View style={styles.topPagBarsWater}>
                    <View style={styles.topPagBarsWaterBlockOne}></View>
                    <View style={styles.topPagBarsWaterBlockTwo}></View>
                    <View style={styles.topPagBarsWaterBlockThree}></View>
                    <View style={styles.topPagBarsWaterBlockFour}></View>
                </View>
            </View>
        </>
    )
}