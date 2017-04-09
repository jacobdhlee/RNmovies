import React, { Component } from 'react';
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

class Row extends Component {
  constructor() {
    super()
    this.state = {
      fav: false,
    }
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite() {
    this.setState({ fav: !this.state.fav })
  }



  render() {
    const { onPress, title, uri, id } = this.props;
    const { fav } = this.state;
    const color = fav ? 'red' : 'rgba(254, 254, 254, 0.5)'
    return (
      <TouchableOpacity onPress={onPress}>
          <Image source={{uri: `https://image.tmdb.org/t/p/w500/${uri}`}} style={styles.backgroundImage}>
            <View style={styles.favoriteContainer}>
              <TouchableOpacity onPress={this.addFavorite}>
                <Icon name="favorite" size={25} color={color}/>
              </TouchableOpacity>
            </View>
            
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>{title}</Text>
            </View>
          </Image>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  favoriteContainer: {
    flex: 3,
    alignItems: 'flex-end',
    padding: 20,
  },
  backgroundImage: {
    height: 150,
    marginVertical: 2,
  },
  textBox: {
    flex: 7,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
})

export default Row;