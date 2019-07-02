import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Hello extends Component{
  render () {
    return(
      <View>
        <Text style={styles.hello}> Hello from Hello.js</Text>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  hello: {
    color: '#ffffff',
    backgroundColor: '#00ff00',

  }
})