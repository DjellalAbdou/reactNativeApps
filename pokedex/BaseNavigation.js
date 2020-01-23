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
import PokemonsInfoScreen from './screens/PokemonsInfoScreen';
import HeaderPokeInfo from './components/HeaderPokeInfo';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const BaseNavigation = createStackNavigator(
  {
    Home: {
      screen: gestureHandlerRootHOC(HomeScreen),
      navigationOptions: {
        headerShown: false,
      },
    },
    Pokemons: {
      screen: gestureHandlerRootHOC(PokemonScreen),
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
    PokeInfo: {
      screen: gestureHandlerRootHOC(PokemonsInfoScreen),
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        gesturesEnabled: true,
        headerStyle: {
          height: 140,
        },
        headerLeft: (
          <HeaderPokeInfo navigation={navigation} gotoScreen="Home" />
        ),
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
