import React from 'react';
import {View, Text, ImageBackground, ScrollView, FlatList} from 'react-native';
import styles from '../assets/styles';
import PokeCard from '../components/PokeCard';
import DATA from '../assets/data/pokemon';

const PokemonsScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/pokeball.png')}
        style={styles.backgroundPokemons}
        imageStyle={styles.pokeballBG}>
        <FlatList
          style={{marginTop: 180}}
          bounces
          contentContainerStyle={styles.pokemonsContainer}
          columnWrapperStyle={styles.pokemonsColContainer}
          //centerContent
          data={DATA}
          numColumns={2}
          renderItem={({item}) => <PokeCard {...item} />}
        />
        {/* <ScrollView style={{marginTop: 180}}>
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
            <PokeCard />
          </View>
        </ScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default PokemonsScreen;
