import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import styles from '../assets/styles';
import InfoTitlePokemon from '../components/InfoTitlePokemon';
import AboutComp from '../components/pokemonInfos/AboutComp';
import BaseStatsComp from '../components/pokemonInfos/BaseStatsComp';
import EvolutionComp from '../components/pokemonInfos/EvolutionComp';
import MovesComp from '../components/pokemonInfos/MovesComp';
import {SceneMap, TabView} from 'react-native-tab-view';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const PokemonsInfoScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'about'},
    {key: 'second', title: 'base stats'},
    {key: 'third', title: 'evolution'},
    {key: 'fourth', title: 'moves'},
  ]);

  const renderScene = SceneMap({
    first: AboutComp,
    second: BaseStatsComp,
    third: EvolutionComp,
    fourth: MovesComp,
  });

  return (
    <ImageBackground
      imageStyle={styles.pokeballBGInfo}
      source={require('../assets/images/pokeball.png')}
      style={[styles.backgroundPokemons, {backgroundColor: '#2bdab1'}]}>
      <InfoTitlePokemon />
      <View style={styles.infoPokemonImageContainer}>
        <Image
          style={styles.infoPokemonImage}
          source={require('../assets/images/001.png')}
        />
      </View>
      <View style={styles.infoTabContainer}>
        <View>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{backgroundColor: '#ddaaad', zIndex: 999}}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PokemonsInfoScreen;
