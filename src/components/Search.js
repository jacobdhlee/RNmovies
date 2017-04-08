import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements';
import { searchInput, searchSubmit } from '../actions'
import api from '../../config/config';

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
  }

  searchBarTextInput(text) {
    this.props.dispatch(searchInput(text))
  }

  searchSubmit() {
    const { movieList } = this.props.store;
    this.props.dispatch(searchSubmit(movieList.search, api.key))
  } 



  render() {
    const { movieList } = this.props.store;
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.searchBarTextInput}
          placeholder='Search Movies / TV shows in Here...' 
          value={movieList.search}
          blurOnSubmit={true}
          onSubmitEditing={this.searchSubmit}/>
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