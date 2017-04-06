import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MovieList from './components/MovieList'
import TVList from './components/TVList'
import Likes from './components/Likes'

const ListTabConfig = {
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
}

export const ListStack = TabNavigator({
  Movie: {
    screen: MovieList,
    navigationOptions: {
      tabBar: {
        lable: 'Movie',
      }
    }
  },
  TV: {
    screen: TVList,
    navigationOptions: {
      tabBar: {
        lable: 'TV',
      }
    }
  }
}, ListTabConfig)

export const MainStack = TabNavigator({
  Main: {
    screen: ListStack,
    navigationOptions: {
      tabBar: {
        lable: 'Lists',
        icon: ({ tintColor }) => <Icon name="list" size={30} color={tintColor}/>
      }
    }
  },
  Love: {
    screen: Likes,
    navigationOptions: {
      tabBar: {
        lable: 'Love',
        icon: ({ tintColor }) => <Icon name="favorite-border" size={30} color={tintColor}/>
      }
    }
  }
})