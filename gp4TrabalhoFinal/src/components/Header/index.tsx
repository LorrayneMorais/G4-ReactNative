import { View, Text } from "react-native";
import { styles } from "./styles";

export const Header = () => {
    return (
        <>
            <View style={styles.topPag}>
                <Text style={styles.topPagContentText}>
                    Virtual Pet
                </Text>
            </View>
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