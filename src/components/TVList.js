import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import Row from './common/Row';

@connect(({movieList}) => {
  return {
    movieList
  }
})

class TVList extends Component {
  render() {
    const { tvs } = this.props.movieList
    console.log('movie list is ', tvs.length)
    return (
      <View style={styles.container}>
        <ScrollView>
          <List>
            {
              tvs.map((tv) => (
                <Row 
                  key={tv.id}
                  uri={ tv.backdrop_path}
                  title={tv.name}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default TVList;