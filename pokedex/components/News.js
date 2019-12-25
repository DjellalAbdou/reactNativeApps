import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../assets/styles';

const News = () => {
  return (
    <TouchableOpacity>
      <View style={styles.newsCompContainer}>
        <View style={styles.newsCompTextContainer}>
          <Text style={styles.newsCompText}>
            pokemon Rumble rush arrives soon
          </Text>
          <Text style={styles.newsCompDate}>24 december 2019</Text>
        </View>
        <Image
          style={styles.newsImage}
          source={require('../assets/images/thumbnail.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default News;
