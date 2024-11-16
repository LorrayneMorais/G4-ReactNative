import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import backgroundImag from "../../../assets/background.png";
import iconEat from '../../../assets/eat.png'
import iconWater from '../../../assets/water.png'
import calendarIcon from '../../../assets/calendario.png'
import heartIcon from '../../../assets/hearticon.png'
import tarefaIcon from '../../../assets/tarefas.png'
import moonIcon from '../../../assets/dormir.png'
import sunIcon from '../../../assets/sun.png'
import gameIcon from '../../../assets/gameicon.png'
// import * as Font from 'expo-font';
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Função para carregar as fontes
  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     'Doto': require('./assets/fonts/Doto.ttf'), // Caminho para sua fonte
  //   });
  //   setFontsLoaded(true);
  // };

  // if (!fontsLoaded) {
  //   loadFonts();
  //   return null;  // Exibe nada enquanto a fonte está carregando
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImag} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.topPag}>
          <View style={styles.topPagContent}>
              <Text style={styles.topPagContentText}>
                Virtual Pet
              </Text>
          </View>
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
        <View style={styles.date}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateContainerText}>29</Text>
          </View>
        </View>
        <View style={styles.containerPet}>
          <View style={styles.containerPetMain}>
            <Image source={require('../../../assets/gifs/normal.gif')} style={styles.gif} resizeMode="contain"/>
          </View>
        </View>
        <View style={styles.iconFoodAndWater}>
          <TouchableOpacity style={styles.iconFood}>
            <Image source={iconEat} style={styles.iconFoodImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWater}>
            <Image source={iconWater} style={styles.iconWaterImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsInteract}>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={calendarIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={heartIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={tarefaIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={moonIcon} style={styles.buttonsInteractIconsSecond}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={sunIcon} style={styles.buttonsInteractIconsSecond}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={gameIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
