import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';


class Detail extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is detail View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default Detail;

