import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { similarMovieSearch, similarTVSearch } from '../actions'
import { Icon, List } from 'react-native-elements'
import api from '../../config/config';

@connect((store) => {
  return {
    store
  }
})
class Detail extends Component {

  componentWillMount() {
    const { id, title } = this.props.navigation.state.params;
    title ? this.props.dispatch(similarMovieSearch(id, api.key)) : this.props.dispatch(similarTVSearch(id, api.key))

  }

  render() {
    const { 
      poster_path, overview, release_date, title, vote_average, first_air_date, name
    } = this.props.navigation.state.params
    const { movieList } = this.props.store;
    const titles = title ? title : name
    const release = release_date ? release_date.split('-') : first_air_date.split('-')
    return (
      <ScrollView style={styles.container}>
        <Image 
          source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
          style={styles.imageStyle}/>
        <View style={styles.detailStyle}>
          <View style={styles.titleBox}>
            <Text style={{fontSize: 17, fontWeight: '600'}}>{titles} ({release[0]})</Text>
          </View>
          <View style={styles.rating}>
            <Icon name="star" size={25} color='yellow'/>
            <View style={styles.ratingTextBox}>
              <Text>{vote_average} / 10</Text>
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={{fontSize: 15}}>{overview}</Text>
          </View>
        </View>

        <View>
          <Text>Simular</Text>
        </View>
        <List>

        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    marginTop: 5,
    height: 250,
  },
  detailStyle: {
    flex: 1,
  },
  titleBox:{
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  rating: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    paddingLeft: 10,
  },
  ratingTextBox: {
    paddingLeft: 10,
  },
  overview: {
    flex: 1,
    marginTop: 5,
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  }
})

export default Detail;

