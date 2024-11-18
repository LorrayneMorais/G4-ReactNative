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
import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export const Home = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hungerLevel, setHungerLevel] = useState(4);
  const [waterLevel, setWaterLevel] = useState(4);
  const [gifSource, setGifSource] = useState(require('../../../assets/gifs/feliz.gif'));
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const interval = setInterval(() => {
      setHungerLevel((prev) => Math.max(prev - 1, 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervalWater = setInterval(() => {
      setWaterLevel((prev) => Math.max(prev - 1, 0));
    }, 5000);

    return () => clearInterval(intervalWater);
  }, []);

  const increaseHunger = () => {
    setHungerLevel((prev) => Math.min(prev + 1, 4));
  };

  const increaseWater = () => {
    setWaterLevel((prev) => Math.min(prev + 1, 4));
  };

  const handleGifCarinho = () => {
    setGifSource(require('../../../assets/gifs/carinho.gif'));

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/feliz.gif'));
    }, 3000);
  };

  const handleGifDormir = () => {
    setGifSource(require('../../../assets/gifs/dormir.gif'));

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/feliz.gif'));
    }, 7000);
  };

  const handleGifCorrer = () => {
    setGifSource(require('../../../assets/gifs/normal.gif'));

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/feliz.gif'));
    }, 7000);
  };

  const navigationTarefas = () => {
    navigation.navigate('Tarefas');
  }

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
            <View style={[styles.topPagBarsFoodBlockOne, { backgroundColor: hungerLevel >= 1 ? "orange" : "white" }]}/>
            <View style={[styles.topPagBarsFoodBlockTwo,{ backgroundColor: hungerLevel >= 2 ? "orange" : "white" }]}/>
            <View style={[styles.topPagBarsFoodBlockThree,{ backgroundColor: hungerLevel >= 3 ? "orange" : "white" }]}/>
            <View style={[styles.topPagBarsFoodBlockFour,{ backgroundColor: hungerLevel >= 4 ? "orange" : "white" }]}/>
          </View>
          <View style={styles.topPagBarsWater}>
            <View style={[styles.topPagBarsWaterBlockOne, {backgroundColor: waterLevel >= 4 ? "#1CD4E9" : "white "}]} />
            <View style={[styles.topPagBarsWaterBlockTwo, {backgroundColor: waterLevel >= 3 ? "#1CD4E9" : "white "}]} />
            <View style={[styles.topPagBarsWaterBlockThree, {backgroundColor: waterLevel >= 2 ? "#1CD4E9" : "white "}]} />
            <View style={[styles.topPagBarsWaterBlockFour, {backgroundColor: waterLevel >= 1 ? "#1CD4E9" : "white "}]} />
          </View>
        </View>
        <View style={styles.date}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateContainerText}>29</Text>
          </View>
        </View>
        <View style={styles.containerPet}>
          <View style={styles.containerPetMain}>
            <Image source={gifSource} style={styles.gif} resizeMode="contain"/>
          </View>
        </View>
        <View style={styles.iconFoodAndWater}>
          <TouchableOpacity style={styles.iconFood} onPress={increaseHunger}>
            <Image source={iconEat} style={styles.iconFoodImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWater} onPress={increaseWater}>
            <Image source={iconWater} style={styles.iconWaterImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsInteract}>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={calendarIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne} onPress={handleGifCarinho}><Image source={heartIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne} onPress={navigationTarefas}><Image source={tarefaIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne} onPress={handleGifDormir}><Image source={moonIcon} style={styles.buttonsInteractIconsSecond}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne}><Image source={sunIcon} style={styles.buttonsInteractIconsSecond}/></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractOne} onPress={handleGifCorrer}><Image source={gameIcon} style={styles.buttonsInteractIcons}/></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
