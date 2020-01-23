import React from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/styles';

const InfoTitlePokemon = () => {
  const renderTypes = typeofpokemon => {
    return typeofpokemon.map(type => (
      <View key={type} style={styles.infoTitlecategoriestextContainers}>
        <Text style={styles.infoTitlecategories}>{type}</Text>
      </View>
    ));
  };
  let arr = ['grass', 'poison'];
  return (
    <View style={styles.infoTitleContainer}>
      <View style={styles.infoTitleNamePokemonContainer}>
        <Text style={styles.infoTitleNamePokemon}>bulbasaur</Text>
        <Text style={styles.infoTitleIDPokemon}>#001</Text>
      </View>
      <View style={styles.infoTitleNamePokemonContainer}>
        <View style={styles.infoTitleCategoriesContainer}>
          {renderTypes(arr)}
        </View>

        <Text style={styles.infoTitleType}>seed</Text>
      </View>
    </View>
  );
};

export default InfoTitlePokemon;
