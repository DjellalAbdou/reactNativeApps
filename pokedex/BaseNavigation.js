import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PokemonScreen from './screens/PokemonsScreen';
import HeaderTitle from './components/HeaderTitle';
import HeaderPokemons from './components/HeaderPokemons';

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
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        gesturesEnabled: true,
        headerLeft: (
          <HeaderPokemons navigation={navigation} gotoScreen="Home" />
        ),
        headerStyle: {
          height: 180,
        },
        headerTitle: <HeaderTitle />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
  },
);

export default createAppContainer(BaseNavigation);
