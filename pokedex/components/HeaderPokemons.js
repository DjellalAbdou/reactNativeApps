import React from 'react';
import {View, Text} from 'react-native';
import IconRippleButton from './IconRippleButton';
import styles from '../assets/styles';

const HeaderPokemons = ({navigation, gotoScreen}) => {
  const onPress = gotoScreen => {
    navigation.navigate(gotoScreen);
  };
  return (
    <View style={styles.headerContainer}>
      <IconRippleButton
        {...{onPress, gotoScreen}}
        size={25}
        name="arrow-back"
        color="#000000"
      />
      <IconRippleButton
        color="#000000"
        {...{onPress, gotoScreen}}
        size={25}
        name="menu"
      />
    </View>
  );
};

export default HeaderPokemons;
