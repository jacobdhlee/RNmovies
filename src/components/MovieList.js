import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { getMovieList, getTVList } from '../actions';
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
    this.props.dispatch(getTVList(api.key))
  }

  render() {
    const { movies } = this.props.movieList
    const favColor = 'rgba(254,254,254,0.5)'
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
                  color={favColor}
                  id={movie}
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