import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    },
  };

  componentDidMount() {
    this.setState({mapLoaded: true});
  }

  onRegionChangeComplete = region => {
    console.log(region);
    this.setState({region});
  };

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={styles.spiner}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={styles.fullscreen}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this Area"
            buttonStyle={styles.buttonStyle}
            icon={{name: 'search', color: 'white'}}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
  },
  spiner: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  buttonStyle: {
    backgroundColor: '#009688',
    paddingVertical: 15,
  },
});

export default connect(null, actions)(MapScreen);
