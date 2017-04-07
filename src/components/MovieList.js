import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { getMovieList } from '../actions';
import api from '../../config/config';

import Row from './common/Row';

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
    const { movies } = this.props.movieList
    console.log('movie list is ', movies.length)
    return (
      <View style={styles.container}>
        <ScrollView>
          <List>
            {
              movies.map((movie) => (
                <Row 
                  key={movie.id}
                  uri={ movie.backdrop_path}
                  title={movie.original_title}
                />
              ))
            }
          </List>
        </ScrollView>
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