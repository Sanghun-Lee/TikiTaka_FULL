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

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    LoginPage: {screen: LoginPage},
    PasswordFind: {screen: PasswordFind},
    MainPage: {screen: MainPage},
    Category: {screen: Category},
    Setting: {screen: Setting},
    SearchResult: {screen: SearchResult},
    Search: {screen: Search},
    ProjectList: {screen: ProjectList},
    ProjectScreen: {screen: ProjectScreen},
    FreelancerList: {screen: FreelancerList},
    FreelancerScreen: {screen: FreelancerScreen},
    ChattingList: {screen: ChattingList},
    MyCircle: {screen: MyCircle},
    MyProject: {screen: MyProject},
    MyPage: {screen: MyPage},
    FavoriteList: {screen: FavoriteList},
    CreateNewProject: {screen: CreateNewProject},
    SignUpPage: {screen: SignUpPage},
  },
  {
    initialRouteKey: 'LoginPage',
    headerMode: 'none',
  }
);

let Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}

/*
  TODO 더 구현해야하는 화면
  * 1. 내 페이지 (서브페이지에서 내 사진을 누르면 접근)
  * 2. 내 정보 수정 (내 페이지에서 오른쪽 상단에 수정버튼을 통해서 접근)
  * 3. 프로젝트 참여인원 : scrollView로 인스타그램처럼 만든다. 클릭시 해당 프리랜서 페이지로 이동
  * 4. 새 프로젝트 만들기 창
  * 5. 내 프로젝트에서 프로젝트로 들어가면 가장 아래쪽에 메시지가 아닌 이 프로젝트에서 나가기 버튼을 둔다.
  * 
  ! 내가 어느 프로젝트에 참가하게되면 "내 프로젝트" 메뉴에도 그 프로젝트가 나타난다.
  ! 그러면 프로젝트 수정 삭제는 프로젝트 팀장만의 권한인데 이를 어떻게 유니크하게 접근할 것인가
*/
