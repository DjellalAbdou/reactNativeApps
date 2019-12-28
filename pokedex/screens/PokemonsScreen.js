import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import styles from '../assets/styles';
import PokeCard from '../components/PokeCard';

const PokemonsScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/pokeball.png')}
        style={styles.backgroundPokemons}
        imageStyle={styles.pokeballBG}>
        <ScrollView style={{marginTop: 180}}>
          <View style={styles.pokemonsContainer}>
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PokemonsScreen;
