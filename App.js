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

import React, {Component} from 'react';
import {View} from 'react-native';

class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <FreelancerScreen />
      </View>
    );
  }
}

export default App;

// import {createStackNavigator, createAppContainer} from 'react-navigation';

// const AppNavigator = createStackNavigator (
//   {
//     LoginPage: {
//       screen: LoginPage,
//     },
//     PasswordFind: {
//       screen: PasswordFind,
//     },
//     MainScrollView: {
//       screen: MainScrollView,
//     },
//     ProjectInfo: {
//       screen: ProjectInfo,
//     },
//     PortfolioInfo: {
//       screen: PortfolioInfo,
//     },
//     MainCategory: {
//       screen: MainCategory,
//     },
//   },
//   {
//     initialRouteKey: 'LoginPage',
//     headerMode: 'none',
//   }
// );

// export default createAppContainer (AppNavigator);

/*
  ! 다운로드한 모듈
  * npm install expo-constants -- 상태바 계산해주는 모듈
  

*/
