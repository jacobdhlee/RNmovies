import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
const { width, height } = Dimensions.get('window');

const LikedMovie = ({uri, title, name, onPress, onButtonPress}) => {
  const titles = title ? title : name;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toucableCard} onPress={onPress}>
        <View style={styles.card}>
          <Image 
            source={{uri: `https://image.tmdb.org/t/p/w500/${uri}`}}
            style={{flex: 1}}>
          </Image>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonBox}>
        <Button
          title="remove" 
          buttonStyle={styles.buttonStyle}
          onPress={onButtonPress}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
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

  buttonStyle: {
    margin: 5,
    width: (width / 2) - 30,
    height: 30,
  }
})

export default LikedMovie;