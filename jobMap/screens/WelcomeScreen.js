import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text: 'welcome to hobapp', color: '#03a9f4'},
  {text: 'use this to get a job', color: '#009688'},
  {text: 'set your location , then swipe away', color: '#03a9f4'},
];

export default class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}
