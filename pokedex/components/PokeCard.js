import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles';

const PokeCard = () => {
  return (
    <TouchableOpacity style={styles.pokeCard}>
      <ImageBackground
        style={styles.pokeCardBackground}
        imageStyle={styles.pokeCardBGIcon}
        source={require('../assets/images/pokeball.png')}>
        <View style={styles.pokeCardIDContainer}>
          <Text style={styles.pokeCardID}>#001</Text>
        </View>
        <View style={styles.namePokeCardContainer}>
          <Text style={styles.namePokeCard}>bulbasaur</Text>
        </View>
        <View style={styles.twoColPokeCard}>
          <View style={styles.twoColPokeCardFirst}>
            <View style={styles.categoriePokeCardContainer}>
              <Text style={styles.categoriePokeCard}>Grass</Text>
            </View>
            <View style={styles.categoriePokeCardContainer}>
              <Text style={styles.categoriePokeCard}>Poisson</Text>
            </View>
          </View>
          <View style={styles.pokeCardImageContainer}>
            <Image
              source={require('../assets/images/001.png')}
              style={styles.pokeCardImage}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PokeCard;
