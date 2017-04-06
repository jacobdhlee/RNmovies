import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Likes extends Component {
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
    backgroundColor: '#ff9b77',
  }
})

export default Likes;