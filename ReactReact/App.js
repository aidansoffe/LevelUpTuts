import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Hello from './Hello';
import {LinearGradient} from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Hello />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 25

  },
});
