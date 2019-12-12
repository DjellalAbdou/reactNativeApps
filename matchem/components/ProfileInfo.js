import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../components/Icon';
import styles from '../assets/styles';

const ProfileInfo = ({
  match,
  name,
  age,
  location,
  info1,
  info2,
  info3,
  info4,
}) => {
  return (
    <View style={styles.containerProfileInfo}>
      <View style={styles.matcheProfileInfo}>
        <Text style={styles.cardItemMatchText}>
          <Icon name="heart" /> {match}% Match!
        </Text>
      </View>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.ageAndLocationProfile}>
        {age} - {location}
      </Text>

      <View style={styles.infoProfile}>
        <Text style={styles.iconsProfile}>
          <Icon name="user" />
        </Text>
        <Text style={styles.textIconProfile}>{info1}</Text>
      </View>
      <View style={styles.infoProfile}>
        <Text style={styles.iconsProfile}>
          <Icon name="circle" />
        </Text>
        <Text style={styles.textIconProfile}>{info2}</Text>
      </View>
      <View style={styles.infoProfile}>
        <Text style={styles.iconsProfile}>
          <Icon name="hashtag" />
        </Text>
        <Text style={styles.textIconProfile}>{info3}</Text>
      </View>
      <View style={styles.infoProfile}>
        <Text style={styles.iconsProfile}>
          <Icon name="calendar" />
        </Text>
        <Text style={styles.textIconProfile}>{info4}</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
