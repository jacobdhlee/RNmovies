import React, { Component } from 'react';
import {
  WebView,
  Text,
  View,
  StyleSheet
} from 'react-native';

class YoutubeTrailer extends Component {
  render() {
    const { name, id } = this.props.navigation.state.params;
    return (
      <WebView 
      style={{flex: 1}}
      javaScriptEnabled={true}
      source={{uri: `https://www.youtube.com/embed/${id}`}}/>
    )
  }
}

export default YoutubeTrailer;