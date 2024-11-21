import React from "react";
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './styles'
import images from "../Images";

type PetWeatherProps = {
    gifSource: any;
    gifStyles: any;
    isSunny?: boolean;
    isRainy?: boolean;
    isCloud?: boolean;
    isNub?: boolean;
};

export const PetWeatherComponent: React.FC<PetWeatherProps> = ({
    gifSource,
    gifStyles,
    isSunny,
    isRainy,
    isCloud,
    isNub,
}) => {
    return (
        <ImageBackground 
            source={images.backgroundPet} 
            style={styles.containerPetMain}
        >
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
              source={images.nubladopng}
              style={styles.cloudGifMode} 
              resizeMode="contain"
            />
            )}
          </ImageBackground>
    )
}