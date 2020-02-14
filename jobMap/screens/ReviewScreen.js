import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Revie Jobs',
      headerRight: () => {
        return (
          <Button
            title="Settings"
            onPress={() => navigation.navigate('settings')}
            buttonStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
            titleStyle={{color: 'rgba(0,122,255,1)'}}
          />
        );
      },
    };
  };

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}
