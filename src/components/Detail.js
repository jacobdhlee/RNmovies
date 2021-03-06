import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'underscore';
import { similarMovieSearch, similarTVSearch, getTrailerId, addFavorite } from '../actions'
import { Icon, List, Button } from 'react-native-elements'
import api from '../../config/config';
import ShowSimilar from './ShowSimilar';

const { width, height } = Dimensions.get('window');

@connect((store) => {
  return {
    store
  }
})
class Detail extends Component {
  constructor() {
    super()

    this.favoriteAdd = this.favoriteAdd.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.trailer = this.trailer.bind(this);
    
  }

  componentWillMount() {
    const { id, title } = this.props.navigation.state.params;
    if(title) {
      this.props.dispatch(similarMovieSearch(id, api.key))
      this.props.dispatch(getTrailerId('movie', id, api.key))
    } else {
      this.props.dispatch(similarTVSearch(id, api.key))
      this.props.dispatch(getTrailerId('tv', id, api.key))
    }

  }

  showDetail(show) {
    this.props.navigation.navigate('Detail', show)
  }

  trailer(youtubeId, titles) {
    const src = { name: titles, id: youtubeId }
    this.props.navigation.navigate('Trailer', src);
  }

  favoriteAdd(movie) {
    const { favorite } = this.props.store.movieList;
    const find = _.find(favorite, (fav) => {
      return fav.id === movie.id
    })
    find ? Alert.alert('Show has already added!') : this.props.dispatch(addFavorite(movie))
  }

  render() {
    const { 
      poster_path, overview, release_date, title, vote_average, first_air_date, name, id,
    } = this.props.navigation.state.params;
    const { similar, youtubeId } = this.props.store.movieList;
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

          <View style={styles.buttonGroup}>
            <Button
              Component={TouchableOpacity}
              title="Trailer"
              backgroundColor="green"
              textStyle={{fontWeight: '600'}}
              buttonStyle ={styles.buttonStyle}
              onPress={() => this.trailer(youtubeId, titles)}/>

            <Button
              Component={TouchableOpacity}
              icon={{name: 'favorite'}}
              title='Like!'
              backgroundColor="red"
              textStyle={{fontWeight: '600'}}
              buttonStyle ={styles.buttonStyle}
              onPress={() => this.favoriteAdd(this.props.navigation.state.params)}
              />
          </View>
        </View>

        <View style={styles.recommendation}>
          <Text style={styles.recommendationText}>Recommendation</Text>
        </View>

        <List containerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            similar.map((show) => (
              <ShowSimilar
                onPress={() => this.showDetail(show)}
                key={show.id}
                title={show.title}
                uri={ show.poster_path}
                name={show.name}
              />
            ))
          }
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
  },
  recommendation: {
    height: 20,
    marginTop: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonGroup: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  buttonStyle: { 
    height: 30,
    width: 150,
    borderRadius: 10,
  }
})

export default Detail;

