import React from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/styles';

const HeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>pokedex</Text>
    </View>
  );
};

export default HeaderTitle;
