import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './assets/styles';

import BaseNavigation from './BaseNavigation';

const App = () => {
  return (
    <View style={styles.fullbackground}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <BaseNavigation />
    </View>
  );
};

export default App;
