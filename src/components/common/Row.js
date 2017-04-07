import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const Row = ({ title, onPress, uri }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500/${uri}`}} style={styles.backgroundImage}>   
        </Image>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width,
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  backgroundImage: {
    flex: 1,
    height: 150,
    width: width * 0.95,
    position: 'absolute',
  }
})

export default Row;