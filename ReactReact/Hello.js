import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Hello extends Component{
  render () {
    return(
      <View>
        <Text style={styles.hello}>{this.props.make}</Text>
        <Text style={styles.hello}>{this.props.model}</Text>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  hello: {
    color: '#0000cd',
    // backgroundColor: 'lightblue',
    fontSize: 30,
    padding: 15,
    
  }
})