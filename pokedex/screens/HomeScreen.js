import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import styles from '../assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeCategorie from '../components/HomeCategorie';
import News from '../components/News';

const HomeScreen = ({navigation}) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const viewHeight = Dimensions.get('window').height - 180;
  const onScroll = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y: scrollY,
        },
      },
    },
  ]);

  const onPress = gotoScreen => {
    navigation.navigate(gotoScreen);
  };

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, viewHeight - 130, viewHeight - 80],
    outputRange: ['#ffffff', '#ffffff', '#ff1500'],
  });
  const animatedStyle = {
    backgroundColor,
  };

  const interpolateZindex = scrollY.interpolate({
    inputRange: [0, viewHeight - 81, viewHeight - 80],
    outputRange: [0, 0, 10],
  });

  console.log(scrollY._value);

  return (
    <View>
      <Animated.View style={[styles.stickyHome, {zIndex: interpolateZindex}]}>
        <Text style={styles.stickyHomeTitle}>pokedex news</Text>
      </Animated.View>
      <ScrollView {...{onScroll}}>
        <Animated.View style={[styles.homeView, animatedStyle]}>
          <ImageBackground
            source={require('../assets/images/pokeball.png')}
            imageStyle={styles.pokeballBG}
            style={styles.backgroundPokeBall}>
            {/* title */}
            <View style={styles.homeHeaderContainer}>
              <Text style={styles.homeHeader}>What Pokemon</Text>
              <Text style={styles.homeHeader}>are you looking for ?</Text>
            </View>

            {/* search bare */}
            <View style={styles.searchWrapper}>
              <Icon name="search" size={27} color="#000000" />
              <TextInput
                style={styles.searchText}
                autoCapitalize="sentences"
                placeholder="Search Pokemon, Move, Ability etc"
              />
            </View>

            {/* categories Components */}

            <View style={styles.categoriesContainer}>
              <HomeCategorie
                {...{onPress}}
                gotoScreen="Pokemons"
                color="5dc3a8"
                name="pokedex"
              />
              <HomeCategorie
                {...{onPress}}
                gotoScreen="Pokemons"
                color="ed6252"
                name="moves"
              />
              <HomeCategorie
                {...{onPress}}
                gotoScreen="Pokemons"
                color="409cee"
                name="abilities"
              />
              <HomeCategorie
                {...{onPress}}
                gotoScreen="Pokemons"
                color="f6c946"
                name="items"
              />
              <HomeCategorie
                {...{onPress}}
                gotoScreen="Pokemons"
                color="7c528d"
                name="locations"
              />
              <HomeCategorie
                {...{onPress}}
                goto="Pokemons"
                color="b3736c"
                name="type charts"
              />
            </View>
          </ImageBackground>
        </Animated.View>
        <ScrollView nestedScrollEnabled horizontal={false}>
          <View style={styles.fullNewsTitleContainer}>
            <Text style={styles.fullNewsTitle}>Top 10 News</Text>
            <Text style={styles.fullNewsSeeAll}>view all</Text>
          </View>

          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
