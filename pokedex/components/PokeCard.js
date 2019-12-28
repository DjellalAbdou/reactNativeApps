import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles';
import baseColors from './baseColors';

const PokeCard = ({id, name, imageurl, typeofpokemon}) => {
  const renderTypes = () => {
    return typeofpokemon.map(type => (
      <View key={type} style={styles.categoriePokeCardContainer}>
        <Text style={styles.categoriePokeCard}>{type}</Text>
      </View>
    ));
  };
  const bgcolor =
    baseColors[typeofpokemon[0].toLowerCase()] === undefined
      ? '#59e0c0'
      : baseColors[typeofpokemon[0].toLowerCase()];
  //console.log(imageurl);
  return (
    <TouchableOpacity style={[styles.pokeCard, {backgroundColor: bgcolor}]}>
      <ImageBackground
        style={styles.pokeCardBackground}
        imageStyle={styles.pokeCardBGIcon}
        source={require('../assets/images/pokeball.png')}>
        <View style={styles.pokeCardIDContainer}>
          <Text style={styles.pokeCardID}>{id}</Text>
        </View>
        <View style={styles.namePokeCardContainer}>
          <Text style={styles.namePokeCard}>{name}</Text>
        </View>
        <View style={styles.twoColPokeCard}>
          <View style={styles.twoColPokeCardFirst}>{renderTypes()}</View>
          <View style={styles.pokeCardImageContainer}>
            <Image source={{uri: imageurl}} style={styles.pokeCardImage} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PokeCard;
