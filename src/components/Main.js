import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { getMovieList } from '../actions';
import api from '../../config/config';
import Header from './common/Header';

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
        <Header title={'Movies'} />
        <View style={styles.bodyContainer}>
          <View>
            <Text>Movie</Text>
          </View>

          <View>
            <Text>TV</Text>
          </View>


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  }
})

export default Main;