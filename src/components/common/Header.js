import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window');

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.mainContainerText}>{title}</Text>
      </View>

      <TouchableOpacity>
        <View style={styles.leftContainer}>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    width,
    backgroundColor: 'red',
  },
  rightContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  leftContainer: {
    flex: 1,
  }
});

export default Header;