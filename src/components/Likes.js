import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { List } from 'react-native-elements';
import LikedMovie from './LikedMovie';
import { removeFavorite } from '../actions'
@connect(({movieList}) => {
  return {
    movieList
  }
})

class Likes extends Component {
  constructor() {
    super()
    this.showDetail = this.showDetail.bind(this);
    this.removeShow = this.removeShow.bind(this);
  }

  showDetail(show){
    this.props.navigation.navigate('Detail', show)
  }

  removeShow(show) {
    this.props.dispatch(removeFavorite(show))
  }

  render() {
    const { favorite } = this.props.movieList;

    return (
      <ScrollView style={styles.container}>
        <List containerStyle={styles.listContainer}>
          {
            favorite.map((show) => (
              <LikedMovie
                onPress={() => this.showDetail(show)}
                key={show.id}
                title={show.title}
                uri={ show.poster_path}
                name={show.name}
                onButtonPress={() => this.removeShow(show)}
              />
            ))
          }
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    backgroundColor: 'rgba(0,0,0,0)',
  }
})

export default Likes;