import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { List, SearchBar } from 'react-native-elements';
import LikedMovie from './LikedMovie';
import { removeFavorite, likeSearchInput } from '../actions'
@connect(({movieList}) => {
  return {
    movieList
  }
})

class Likes extends Component {
  constructor() {
    super()

    this.state = {
      search: ''
    }

    this.showDetail = this.showDetail.bind(this);
    this.removeShow = this.removeShow.bind(this);
    this.likeSearchSubmit = this.likeSearchSubmit.bind(this);
  }

  showDetail(show){
    this.props.navigation.navigate('Detail', show)
  }

  removeShow(show) {
    this.props.dispatch(removeFavorite(show))
  }

  likeSearchSubmit(text) {
    this.setState({search: text})
    this.props.dispatch(likeSearchInput(text))
  } 

  render() {
    const { favorite, likeSearch } = this.props.movieList;
    const { movieList } = this.props;

    const favoriteList = (
      <List containerStyle={styles.listContainer}>
        {favorite.map((show) => (
          <LikedMovie
            onPress={() => this.showDetail(show)}
            key={show.id}
            title={show.title}
            uri={ show.poster_path}
            name={show.name}
            onButtonPress={() => this.removeShow(show)}
          />
        ))}
      </List>
    )

    const filteredList = (
      <List containerStyle={styles.listContainer}>
        {likeSearch.map((show) => (
          <LikedMovie
            onPress={() => this.showDetail(show)}
            key={show.id}
            title={show.title}
            uri={ show.poster_path}
            name={show.name}
            onButtonPress={() => this.removeShow(show)}
          />
        ))}
      </List>
    )
    return (
      <ScrollView style={styles.container}>
        <View>
          <SearchBar
            round
            lightTheme
            onChangeText={(text) => this.likeSearchSubmit(text)}
            placeholder='Find movies that you added'
            onFocus={this.onFocus}/>
        </View>
          {this.state.search.length > 0 ? filteredList : favoriteList}
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