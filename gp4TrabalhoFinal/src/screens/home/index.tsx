import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import backgroundImag from "../../../assets/background.png";
import botaoHeartCoracao from '../../../assets/botaoHeartCoracao.png'
import buttonMoonIconLua from '../../../assets/buttonMoonIconLua.png'
import botaoHalter from '../../../assets/botaoHalter.png'
import tarefasIconTar from '../../../assets/tarefasIconTar.png'
import calendarioIconCalendar from '../../../assets/calendarioIconCalendar.png'
import virtualPet from '../../../assets/virtualPet.png'
import buttonFood from '../../../assets/buttonFoodIcon.png'
import buttonWater from '../../../assets/sem.png'
import nubladopng from '../../../assets/nubladopng.png'
import backgroundPet from '../../../assets/backgroundPet.png'
import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type WeatherData = {
  text: string;
};

export const Home = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [hungerLevel, setHungerLevel] = useState(4);
  const [waterLevel, setWaterLevel] = useState(4);
  const [gifSource, setGifSource] = useState(require('../../../assets/gifs/gifNormalbdNew.gif'));
  const [gifStyles, setGifStyles] = useState(styles.gif);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSunny, setIsSunny] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  const [isCloud, setIsCloud] = useState(false);
  const [isNub, setIsNub] = useState(false);
  const today = new Date();
  const day = today.getDate()
  const apiKey = '8274cf4646fe3a0b32b447a00828a40f';

  const fetchWeather = async () => {
    setLoading(true);
    setError('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Rio+de+Janeiro&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.weather && data.weather.length > 0) {
        setWeatherData(data.weather[0].description);
        extractWeatherKeywords(data.weather[0].description || '');
      }
    } catch (err) {
      setError('Erro ao buscar dados do clima');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHungerLevel((prev) => {
        const newHungerLevel = Math.max(prev - 1, 0);
  
        if (newHungerLevel === 0) {
          setGifSource(require('../../../assets/gifs/fomeIrritadoBd.gif'));
          setGifStyles(styles.gifMudanca)
        } else {
          setGifSource(require('../../../assets/gifs/gifNormalbdNew.gif'));
          setGifStyles(styles.gif)
        }
  
        return newHungerLevel;
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    const intervalWater = setInterval(() => {
      setWaterLevel((prev) => Math.max(prev - 1, 0));
    }, 10000);

    return () => clearInterval(intervalWater);
  }, []);

  const increaseHunger = () => {
    setHungerLevel((prev) => Math.min(prev + 1, 4));
    setGifSource(require('../../../assets/gifs/gifNormalbdNew.gif'));
    setGifStyles(styles.gif)
  };

  const increaseWater = () => {
    setWaterLevel((prev) => Math.min(prev + 1, 4));
  };

  const handleGifCarinho = () => {
    setGifSource(require('../../../assets/gifs/gifCarinhobd.gif'));
    setGifStyles(styles.gifMudanca);

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/gifNormalbdNew.gif'));
      setGifStyles(styles.gif)
    }, 3000);
  };

  const handleGifDormir = () => {
    setGifSource(require('../../../assets/gifs/gifDormirbd.gif'));
    setGifStyles(styles.gifMudanca);

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/gifNormalbdNew.gif'));
      setGifStyles(styles.gif)
    }, 7000);
  };

  const handleGifCorrer = () => {
    setGifSource(require('../../../assets/gifs/gitCorrendobdNew.gif'));
    setGifStyles(styles.gif);

    setTimeout(() => {
      setGifSource(require('../../../assets/gifs/gifNormalbdNew.gif'));
      setGifStyles(styles.gif)
    }, 7000);
  };

  const navigationTarefas = () => {
    navigation.navigate('Tarefas');
  }

  const navigationCalendar = () => {
    navigation.navigate('ListaCompromisso');
  }

  const extractWeatherKeywords = (text: string) => {
    const sunnyCondition = text.toLowerCase().includes('céu limpo');
    const rainyCondition = text.toLowerCase().includes('chuva');
    const cloudCondition = text.toLowerCase().includes('nuvens');
    const nubCondition = text.toLowerCase().includes('nublado');

    setIsSunny(sunnyCondition);
    setIsRainy(rainyCondition);
    setIsCloud(cloudCondition);
    setIsNub(nubCondition);
  };

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
      {/* <Button title="Obter Clima" onPress={fetchWeather} />
      
      {loading && <Text>Carregando...</Text>}
      {error && <Text>{error}</Text>}
      
      {weatherData && (
        <View>
          <Text>Condições climáticas:</Text>
          <Text>{extractWeatherKeywords(weatherData[0]?.text || '').join(', ')}</Text>
        </View>
      )} */}
      <ImageBackground source={backgroundImag} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.topPag}>
          <View style={styles.topPagContent}>
              <Image source={virtualPet} style={styles.topPagContentText}></Image>
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
            <Text style={styles.dateContainerText}>{day}</Text>
          </View>
        </View>
        <View style={styles.containerPet}>
          <ImageBackground source={backgroundPet} style={styles.containerPetMain}>
            <Image source={gifSource} style={gifStyles} resizeMode="contain"/>
            {isSunny && (
            <Image
            source={require('../../../assets/gifs/sunGifPet.gif')}
            style={styles.sunGifMode} 
            resizeMode="contain"
            />
            )}
            {isRainy && (
            <Image
              source={require('../../../assets/gifs/rainGifPet.gif')}
              style={styles.rainGifMode} 
              resizeMode="contain"
            />
            )}
            {isCloud && (
            <Image
              source={require('../../../assets/gifs/nuvemgif.gif')}
              style={styles.cloudGifMode} 
              resizeMode="contain"
            />
            )}
            {isNub && (
            <Image
              source={nubladopng}
              style={styles.cloudGifMode} 
              resizeMode="contain"
            />
            )}
          </ImageBackground>
        </View>
        <View style={styles.iconFoodAndWater}>
          <TouchableOpacity style={styles.iconFood} onPress={increaseHunger}>
            <Image source={buttonFood} style={styles.iconFoodImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWater} onPress={increaseWater}>
            <Image source={buttonWater} style={styles.iconWaterImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsInteract}>
          <TouchableOpacity style={styles.buttonsInteractOne} onPress={navigationCalendar}><Image source={calendarioIconCalendar} style={styles.buttonsBordersCalendar}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractTwo} onPress={handleGifCarinho}><Image source={botaoHeartCoracao} style={styles.buttonsBordersHeart}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractThree} onPress={navigationTarefas}><Image source={tarefasIconTar} style={styles.buttonsBordersTarefas}></Image ></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractFour} onPress={handleGifDormir}><Image source={buttonMoonIconLua} style={styles.buttonsBordersMoon}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.buttonsInteractFour} onPress={handleGifCorrer}><Image source={botaoHalter} style={styles.buttonsBordersExercicio}></Image ></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}