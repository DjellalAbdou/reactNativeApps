import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PokemonScreen from './screens/PokemonsScreen';
import MenuBurger from './components/MenuBurger';

const BaseNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pokemons: {
      screen: PokemonScreen,
      navigationOptions: {
        headerTransparent: true,
        gesturesEnabled: true,
        headerRight: <MenuBurger />,
        headerLeftContainerStyle: {
          marginTop: 30,
        },
        headerRightContainerStyle: {
          //paddingTop: 30,
          marginTop: 30,
          marginRight: 23,
        },
        headerStyle: {
          height: 100,
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
  },
);

export default createAppContainer(BaseNavigation);
