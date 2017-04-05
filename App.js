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
import Main from './src/components/Main';

export default class App extends React.Component {
  render() {
    const logger = createLogger();
    const store = createStore(reducers, {}, applyMiddleware(logger, thunk))
    return (
      <Provider store={store}>
        <Main />
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
