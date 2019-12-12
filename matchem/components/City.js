import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from '../assets/styles';
import Icon from '../components/Icon';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="marker" /> New York
      </Text>
    </TouchableOpacity>
  );
};

export default City;
