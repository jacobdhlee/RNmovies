import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { getMovieList } from '../actions';
import api from '../../config/config';

@connect(({movieList}) => {
  return {
    movieList
  }
})

class Main extends Component {

  componentWillMount() {
    this.props.dispatch(getMovieList(api.key))
  }

  render() {
    const { movieList } = this.props;
    console.log('movieList ?????>>>>?? ', movieList)
    return (
      <View style={styles.contianer}>
        <Text>{movieList.movieList.homepage}</Text>
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