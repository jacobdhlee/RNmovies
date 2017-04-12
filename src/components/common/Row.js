import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
const { height, width } = Dimensions.get('window');

const Row = ({onPress, title, uri}) => {
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
  backgroundImage: {
    height: 150,
    marginVertical: 2,
  },
  textBox: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
})

export default Row;