import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../assets/styles';
import pokeBall from '../assets/images/pokeball.png';

const HomeCategorie = ({color, name}) => {
  const catStyle = {
    backgroundColor: '#' + color,
    shadowColor: '#' + color,
  };
  return (
    <TouchableOpacity>
      <View style={[styles.categorie, catStyle]}>
        <ImageBackground
          imageStyle={styles.BGCatLeft}
          source={pokeBall}
          style={styles.categoriePokeBall}
        />
        <ImageBackground
          imageStyle={styles.BGCatRight}
          source={pokeBall}
          style={styles.categoriePokeBall}
        />
        <View style={styles.categorieTextContainer}>
          <Text style={styles.categorieText}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCategorie;
