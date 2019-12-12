import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from '../components/Icon';
import styles from '../assets/styles';

import DEMO from '../assets/data/demo';
import Message from '../components/Message';

export default class ChatScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.backgroudImg}>
        <View style={styles.likesContainer}>
          <View style={styles.exploreTopBar}>
            <Text style={styles.pageTitle}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.pageIcon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={DEMO}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Message
                  name={item.name}
                  lastMessage={item.message}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
