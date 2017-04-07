import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { getMovieList } from '../actions'
import api from '../../config/config'

@connect(({movieList}) => {
  return {
    movieList
  }
})

class MovieList extends Component {
  
  componentWillMount() {
    this.props.dispatch(getMovieList(api.key))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Movie List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  }
})

export default MovieList;