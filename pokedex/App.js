import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './assets/styles';

import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.fullbackground}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <HomeScreen />
    </View>
  );
};

export default App;
