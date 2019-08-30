import LoginPage from "./src/screens/LoginPage";
import PasswordFind from "./src/screens/PasswordFind";
import MainPage from "./src/screens/MainPage";
import Category from "./src/screens/Category";
import Setting from "./src/screens/Setting";
import SearchResult from "./src/screens/SearchResult";
import Search from "./src/screens/Search";

import React, { Component } from "react";
import { View } from "react-native";

class componentName extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Search />
      </View>
    );
  }
}

export default componentName;

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
