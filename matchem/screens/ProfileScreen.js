import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles';
import DEMO from '../assets/data/demo';
import Icon from '../components/Icon';
import ProfileInfo from '../components/ProfileInfo';

const ProfileScreen = () => {
  const profile = DEMO[7];

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.backgroudImg}>
      <ScrollView>
        <ImageBackground source={profile.image} style={styles.profilePhoto}>
          <View style={styles.exploreTopBar}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <Icon name="chevronLeft" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ProfileInfo {...profile} />
        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButtonProfile}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButtonProfile}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButtonProfile}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
