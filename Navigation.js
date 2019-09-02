//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginPage from './src/screens/LoginPage';
import PasswordFind from './src/screens/PasswordFind';
import MainPage from './src/screens/MainPage';
import Category from './src/screens/Category';
import Setting from './src/screens/Setting';
import SearchResult from './src/screens/SearchResult';
import Search from './src/screens/Search';
import ProjectList from './src/screens/ProjectList';
import ProjectScreen from './src/screens/ProjectScreen';
import FreelancerList from './src/screens/FreelancerList';
import FreelancerScreen from './src/screens/FreelancerScreen';

import ChattingList from './src/screens/not complete/ChattingList';
import Circle from './src/screens/not complete/Circle';
import MyProject from './src/screens/not complete/MyProject';

// create a component
class Navigation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MyClass</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyClass;
