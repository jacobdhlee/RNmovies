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
        <Image source={{uri: `https://image.tmdb.org/t/p/w500/${uri}`}} style={styles.backgroundImage}>
          <View style={styles.textBox}>
            <Text style={styles.textStyle}>{title}</Text>
          </View>
        </Image>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  backgroundImage: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  textBox: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
})

export default Row;