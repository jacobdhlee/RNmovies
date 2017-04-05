import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Should be the first component</Text>
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
