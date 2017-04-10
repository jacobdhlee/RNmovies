import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import { SearchBar, List } from 'react-native-elements';
import { searchInput, searchSubmit } from '../actions'
import api from '../../config/config';
import Row from './common/Row';

@connect((store) => {
  return {
    store,
  }
})

class Search extends Component {
  constructor() {
    super()
    this.searchBarTextInput = this.searchBarTextInput.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this);
    this.showSearchDetail = this.showSearchDetail.bind(this)
  }

  searchBarTextInput(text) {
    this.props.dispatch(searchInput(text))
  }

  searchSubmit() {
    const { movieList } = this.props.store;
    this.props.dispatch(searchSubmit(movieList.search, api.key))
  } 

  showSearchDetail(show) {
    this.props.navigation.navigate('Detail', show)
  }



  render() {
    const { movieList } = this.props.store;
    console.log('movieList is ', movieList.searchList)
    const movies = movieList.searchList;
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.searchBarTextInput}
          placeholder='Search Movies / TV shows in Here...' 
          value={movieList.search}
          blurOnSubmit={true}
          onSubmitEditing={this.searchSubmit}/>
        <List>
          <ScrollView>
            {
              movies.map((movie) => (
                <Row 
                  key={movie.id}
                  uri={ movie.poster_path}
                  title={movie.original_title}
                  onPress={() => this.showSearchDetail(movie)}
                />
              ))
            }
          </ScrollView>
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Search