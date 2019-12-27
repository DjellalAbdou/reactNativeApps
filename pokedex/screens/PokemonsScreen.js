import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../assets/styles';

const PokemonsScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/pokeball.png')}
        style={styles.backgroundPokemons}
        imageStyle={styles.pokeballBG}></ImageBackground>
    </View>
  );
};

export default PokemonsScreen;
