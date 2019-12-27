import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import PokemonScreen from './screens/PokemonsScreen';

const BaseNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pokemons: PokemonScreen,
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
  },
);

export default createAppContainer(BaseNavigation);
