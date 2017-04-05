import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { getMovieList } from '../actions'

@connect(({movieList}) => {
  return {
    movieList
  }
})

class Main extends Component {

  componentWillMount() {
    this.props.dispatch(getMovieList('hahahah I love movie'))
  }

  render() {
    const { movieList } = this.props;
    return (
      <View style={styles.contianer}>
        <Text>{movieList.movies}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default Main;