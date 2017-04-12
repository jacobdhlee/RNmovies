import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { getMovieList, getTVList, addFavorite, removeFavorite } from '../actions';
import api from '../../config/config';

import Row from './common/Row';

@connect(({movieList}) => {
  return {
    movieList
  }
})

class MovieList extends Component {

  constructor() {
    super()
    this.showMovieDetail = this.showMovieDetail.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getMovieList(api.key))
    this.props.dispatch(getTVList(api.key))
  }

  showMovieDetail(movie) {
    this.props.navigation.navigate('Detail', movie)
  }

  render() {
    const { movies, favorite } = this.props.movieList
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
                  id={movie}
                  onPress={() => this.showMovieDetail(movie)}
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
  }
})

export default MovieList;