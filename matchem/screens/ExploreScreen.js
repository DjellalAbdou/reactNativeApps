import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from '../assets/styles';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import City from '../components/City';
import Filters from '../components/Filters';
import DEMO from '../assets/data/demo';

export default class ExploreScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.backgroudImg}>
        <View style={styles.exploreTopBar}>
          <City />
          <Filters />
        </View>

        <CardStack
          renderNoMoreCards={() => null}
          verticalSwipe={false}
          ref={swiper => (this.swiper = swiper)}>
          {DEMO.map(user => (
            <Card key={user.id}>
              <CardItem
                onPressRight={() => this.swiper.swipeRight()}
                onPressLeft={() => this.swiper.swipeLeft()}
                image={user.image}
                actions
                description={user.description}
                match={user.match}
              />
            </Card>
          ))}
        </CardStack>
      </ImageBackground>
    );
  }
}
