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
import FavoriteList from './src/screens/FavoriteList';
import MyProject from './src/screens/MyProject';

import ChattingList from './src/screens/not complete/ChattingList';
import MyCircle from './src/screens/not complete/MyCircle';
import MyPage from './src/screens/not complete/MyPage';
import CreateNewProject from './src/screens/not complete/CreateNewProject';
import SignUpPage from './src/screens/SignUpPage';
import WriteMyInfo from './src/screens/not complete/WriteMyInfo';
import Calendar from './src/components/inputForm/Calendar';

import Temp from './temp';

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    LoginPage: { screen: LoginPage },
    PasswordFind: { screen: PasswordFind },
    MainPage: { screen: MainPage },
    Category: { screen: Category },
    Setting: { screen: Setting },
    SearchResult: { screen: SearchResult },
    Search: { screen: Search },
    ProjectList: { screen: ProjectList },
    ProjectScreen: { screen: ProjectScreen },
    FreelancerList: { screen: FreelancerList },
    FreelancerScreen: { screen: FreelancerScreen },
    ChattingList: { screen: ChattingList },
    MyCircle: { screen: MyCircle },
    MyProject: { screen: MyProject },
    MyPage: { screen: MyPage },
    FavoriteList: { screen: FavoriteList },
    CreateNewProject: { screen: CreateNewProject },
    SignUpPage: { screen: SignUpPage },
    WriteMyInfo: { screen: WriteMyInfo },
    Calendar: { screen: Calendar },
  },
  {
    initialRouteKey: 'LoginPage',
    headerMode: 'none',
  },
);

let Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}
