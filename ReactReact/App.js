import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Hello from './Hello';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {


  render() {

    const cars = [{
      make: 'Chrysler',
      model: '300'
    }, {
      make: 'Honda',
      model: 'CRV'
    }, {
      make: 'Cadillac',
      model: 'XTS'
    }];
    return (
      <View style={styles.container}>
        <LinearGradient style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} colors={['#ba55d3', '#ffb6c1', '#87cefa']}>
          {cars.map(car => {
            return <Hello make={car.make} model={car.model} />
          })}
        </LinearGradient>
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
    fontSize: 25,
    

  },
});
