import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ShowSimilar = ({uri, title, name, onPress}) => {
  const titles = title ? title : name;
  return (
    <TouchableOpacity style={styles.toucableCard} onPress={onPress}>
      <View style={styles.card}>
        <Image 
          source={{uri: `https://image.tmdb.org/t/p/w500/${uri}`}}
          style={{flex: 1}}>
        </Image>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  toucableCard: {
    width: (width / 2) - 15,
    height: 250,
    marginLeft: 10,
    marginTop: 10
  },
  card: {
    backgroundColor: 'lightblue',
    width: (width / 2) - 15,
    height: 250,
  },
})

export default ShowSimilar;