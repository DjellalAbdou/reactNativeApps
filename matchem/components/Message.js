import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../assets/styles';

const Message = ({image, name, lastMessage}) => {
  return (
    <View style={styles.messageContainer}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};

export default Message;
