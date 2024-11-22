import React from 'react';
import { TouchableOpacity, Image, StyleSheet, GestureResponderEvent, ImageBackground } from 'react-native';
import images from "../Images";
import { styles } from './styles';

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  type: "calendar" | "heart" | "tasks" | "moon" | "exercise";
  style?: any;
  imageStyle?: any; 
};

const imageMap = {
  calendar: require('../../../assets/calendarioIconCalendar.png'),
  heart: require('../../../assets/botaoHeartCoracao.png'),
  tasks: require('../../../assets/tarefasIconTar.png'),
  moon: require('../../../assets/buttonMoonIconLua.png'),
  exercise: require('../../../assets/botaoHalter.png'),
};

const styleMap = {
  calendar: styles.buttonsBordersCalendar,
  heart: styles.buttonsBordersHeart,
  tasks: styles.buttonsBordersTarefas,
  moon: styles.buttonsBordersMoon,
  exercise: styles.buttonsBordersExercicio,
};

export const ButtonComponent: React.FC<ButtonProps> = ({ onPress, type, style, imageStyle }) => {
  const imageSource = imageMap[type];
  const buttonStyle = styleMap[type]; 

  return (
    <ImageBackground source={images.backgroundPet} style={styles.containerPetMain}>
      <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
        <Image source={imageSource} style={imageStyle} />
      </TouchableOpacity>
    </ImageBackground>
  );
};
