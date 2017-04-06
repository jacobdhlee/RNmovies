import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

class MovieList extends Component {
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