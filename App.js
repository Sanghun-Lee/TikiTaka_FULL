import React from 'react';
import {YellowBox} from 'react-native';
import LoginPage from './src/screens/LoginPage';
import {Font} from 'expo';
import PasswordFind from './src/screens/PasswordFind';

import MainScrollView from './src/screens/MainScrollView';
import MainCategory from './src/screens/MainCategory';
import ProjectInfo from './src/screens/ProjectInfo';
import PortfolioInfo from './src/screens/PortfolioInfo';

// import {StackNavigator, DrawerNavigator} from 'react-navigation';

// const DrawerNavigation = DrawerNavigator ({
//   LoginPage: {
//     screen: LoginPage,
//   },
//   PasswordFind: {
//     screen: PasswordFind,
//   },
//   MainScrollView: {
//     screen: MainScrollView,
//   },
//   ProjectInfo: {
//     screen: ProjectInfo,
//   },
//   PortfolioInfo: {
//     screen: PortfolioInfo,
//   },
//   MainCategory: {
//     screen: MainCategory,
//   },
// });
// const StackNavigation = StackNavigator (
//   {
//     DrawerNavigation: {
//       screen: DrawerNavigation,
//     },
//     PasswordFind: {
//       screen: PasswordFind,
//     },
//     LoginPage: {
//       screen: LoginPage,
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
//     headerMode: 'none',
//   }
// );
// export default class App extends React.Component {
//   constructor () {
//     super ();
//     this.state = {
//       fontLoaded: false,
//     };
//     YellowBox.ignoreWarnings ([
//       'Warning: componentWillMount is deprecated',
//       'Warning: componentWillReceiveProps is deprecated',
//       'Warning: componentWillUpdate is deprecated',
//     ]);
//   }
//   async componentDidMount () {
//     await Font.loadAsync ({
//       Roboto: require ('./src/assets/fonts/Arial.ttf') /*Fallback Font*/,
//     });

//     this.setState ({fontLoaded: true});
//     console.warn ('Fallback font is being used. Please check App.js file.');
//   }
//   render () {
//     return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
//   }
// }

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator (
  {
    LoginPage: {
      screen: LoginPage,
    },
    PasswordFind: {
      screen: PasswordFind,
    },
    MainScrollView: {
      screen: MainScrollView,
    },
    ProjectInfo: {
      screen: ProjectInfo,
    },
    PortfolioInfo: {
      screen: PortfolioInfo,
    },
    MainCategory: {
      screen: MainCategory,
    },
  },
  {
    initialRouteKey: 'LoginPage',
    headerMode: 'none',
  }
);

export default createAppContainer (AppNavigator);

/*
  ! 다운로드한 모듈
  * npm install expo-constants -- 상태바 계산해주는 모듈

*/
