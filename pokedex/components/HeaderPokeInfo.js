import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import IconRippleButton from './IconRippleButton';
import styles from '../assets/styles';
import LottieView from 'lottie-react-native';

const HeaderPokeInfo = ({navigation, gotoScreen}) => {
  const onPress = gotoScreen => {
    navigation.navigate(gotoScreen);
  };
  const [isLiked, setIsLiked] = useState(false);
  const progress = new Animated.Value(0);

  const animateHeart = liking => {
    if (!liking) {
      Animated.timing(progress, {
        toValue: 0.7,
        duration: 500,
        easing: Easing.linear,
      }).start(() => {
        setIsLiked(true);
      });
    } else {
      Animated.timing(progress, {
        toValue: 0,
        duration: 800,
        easing: Easing.linear,
      }).start(() => {
        setIsLiked(false);
      });
    }
  };
  return (
    <View style={styles.headerInfoContainer}>
      <IconRippleButton
        {...{onPress, gotoScreen}}
        size={25}
        name="arrow-back"
        color="#ffffff"
      />
      <TouchableOpacity
        onPress={() => {
          animateHeart(isLiked);
        }}>
        <LottieView
          autoSize
          progress={progress}
          style={{width: 160, marginRight: -40}}
          source={require('../assets/data/heartAnimationWhite.json')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPokeInfo;
