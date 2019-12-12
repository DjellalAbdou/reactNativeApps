import React from 'react';
import styles from '../assets/styles';

import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from './Icon';
//import {TouchableOpacity} from 'react-native-gesture-handler';

const CardItem = ({
  image,
  name,
  match,
  onPressRight,
  onPressLeft,
  description,
  actions,
  status,
  smallVariant,
}) => {
  const fullWidth = Dimensions.get('window').width;
  const ImageExploreVariant = {
    borderRadius: 8,
    width: fullWidth / 2 - 30,
    height: 170,
    margin: 0,
  };
  const nameUserCardVariant = {
    paddingTop: 10,
    paddingBottom: 5,
    color: '#363636',
    fontSize: 15,
  };
  return (
    <View style={styles.cardItemContainer}>
      <Image
        source={image}
        style={smallVariant ? ImageExploreVariant : styles.ImageExplore}
      />

      {match && (
        <View style={styles.cardItemMatch}>
          <Text style={styles.cardItemMatchText}>
            <Icon name="heart" /> {match}% Match!
          </Text>
        </View>
      )}

      <Text style={smallVariant ? nameUserCardVariant : styles.nameUserCard}>
        {name}
      </Text>

      {/* case when the description is little ?  */}
      {description && (
        <Text style={styles.cardItemDescription}>{description}</Text>
      )}

      {status && (
        <View style={styles.status}>
          <View
            style={[
              styles.statusCircle,
              status === 'Offline' ? {backgroundColor: '#D04949'} : null,
            ]}
          />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {actions && (
        <View style={styles.cardItemActions}>
          <TouchableOpacity style={styles.miniActionButton}>
            <Text style={styles.starIcon}>
              <Icon name="star" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actioButton}
            onPress={() => onPressRight()}>
            <Text style={styles.likeIcon}>
              <Icon name="like" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actioButton}
            onPress={() => onPressLeft()}>
            <Text style={styles.dislikeIcon}>
              <Icon name="dislike" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniActionButton}>
            <Text style={styles.flashIcon}>
              <Icon name="flash" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
