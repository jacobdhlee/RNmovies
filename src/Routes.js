import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MovieList from './components/MovieList';
import TVList from './components/TVList';
import Likes from './components/Likes';
import Search from './components/Search';
import Detail from './components/Detail';

const ListTabConfig = {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 15,
    },
    style: {
      height: 30,
      alignItems: 'center',
    },
  }
}

export const ListStack = TabNavigator({
  Movie: {
    title: 'Lists!',
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

export const MainTabStack = TabNavigator({
  List: {
    screen: ListStack,
    navigationOptions: {
      tabBar: {
        lable: 'Lists',
        icon: ({ tintColor }) => <Icon name="list" size={30} color={tintColor}/>
      }
    }
  },

  Search: {
    screen: Search,
    navigationOptions: {
      tabBar: {
        lable: 'Search',
        icon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor}/>
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

export const MainStack = StackNavigator({
  List: {
    screen: MainTabStack,
    navigationOptions: {
      header: ({navigate, state, setParams, dispatch}) => {
        const { index, routes } = state
        const mainRouteName = routes[index].routeName
        const subTabIndex = routes[index].index
        const subTabRoutes = routes[0].routes
        const tabName = subTabIndex === undefined ? '' : subTabRoutes[subTabIndex].routeName
        return { 
          title: `${tabName} ${mainRouteName}`
        }
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: ({state}) => state.params.original_title || state.params.original_name
    }
  }
})