import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './common/Header'
class Likes extends Component {
  render() {
    // console.log('this props ', this.props.navigation.state.routeName)
    return (
      <View style={styles.container}>
        <View>
          <Text>Movie List</Text>
        </View>
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