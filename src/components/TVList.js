import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TVList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TV List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  }
})

export default TVList;