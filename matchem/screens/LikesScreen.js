import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from '../assets/styles';
import Icon from '../components/Icon';

import DEMO from '../assets/data/demo';
import CardItem from '../components/CardItem';

export default class LikesScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.backgroudImg}>
        <View style={styles.likesContainer}>
          <View style={styles.exploreTopBar}>
            <Text style={styles.pageTitle}>Likes</Text>
            <TouchableOpacity>
              <Text style={styles.pageIcon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            numColumns={2}
            data={DEMO}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity>
                <CardItem
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  smallVariant
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
