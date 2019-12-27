import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../assets/styles';

const MenuBurger = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('menu pressed')}
      style={styles.MenuBurgerButton}>
      <View style={styles.MenuBurgerButtonContainer}>
        <Text>
          <Icon name="menu" size={25} color="#000000" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuBurger;
