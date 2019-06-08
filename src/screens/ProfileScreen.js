import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import Button from '../components/common/Button';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Profile screen </Text>
        <Button title="Sign Up" onPress={() => firebase.auth().signOut()}></Button>
      </View>
    );
  }
}
