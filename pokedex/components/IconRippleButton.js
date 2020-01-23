import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../assets/styles';
import Ripple from 'react-native-material-ripple';

const IconRippleButton = ({color, size, name, onPress, gotoScreen}) => {
  return (
    <Ripple
      onPress={() => onPress(gotoScreen)}
      rippleCentered
      rippleFades
      rippleOpacity={0.7}
      rippleContainerBorderRadius={30}>
      <View style={styles.MenuBurgerButtonContainer}>
        <Text>
          <Icon name={name} size={size} color={color} />
        </Text>
      </View>
    </Ripple>
  );
};

export default IconRippleButton;
