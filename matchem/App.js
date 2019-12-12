import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ChatScreen from './screens/ChatScreen';
import ExploreScreen from './screens/ExploreScreen';
import LikesScreen from './screens/LikesScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from './components/Icon';

import styles from './assets/styles';

const App = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconBottomBar, {color: iconFocused}]}>
              <Icon name="explore" />
            </Text>
          );
        },
      },
    },
    Likes: {
      screen: LikesScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconBottomBar, {color: iconFocused}]}>
              <Icon name="heart" />
            </Text>
          );
        },
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconBottomBar, {color: iconFocused}]}>
              <Icon name="chat" />
            </Text>
          );
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let iconFocused = focused ? '#7444C0' : '#363636';
          return (
            <Text style={[styles.iconBottomBar, {color: iconFocused}]}>
              <Icon name="user" />
            </Text>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#7444c0',
      inactiveTintColor: '#363636',
      labelStyle: {
        fontSize: 12,
        textTransform: 'uppercase',
        paddingTop: 10,
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        paddingTop: 15,
        paddingBottom: 10,
        height: 65,
        marginBottom: 0,
        shadowRadius: 10,
        shadowOpacity: 0.05,
        shadowColor: '#000',
        shadowOffset: {height: 0, width: 0},
        elevation: 1,
      },
    },
  },
);

export default createAppContainer(App);
