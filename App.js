import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import { MainStack, Root } from './src/Routes';

export default class App extends React.Component {

  render() {
    const logger = createLogger();
    const store = createStore(reducers, {} ,applyMiddleware(thunk, logger))
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
