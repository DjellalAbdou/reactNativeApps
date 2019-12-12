import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from './Icon';
import styles from '../assets/styles';

const Filters = () => {
  return (
    <TouchableOpacity style={[styles.city, styles.filters]}>
      <Text style={styles.cityText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
