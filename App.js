import LoginPage from "./src/screens/LoginPage";
import PasswordFind from "./src/screens/PasswordFind";
import MainPage from "./src/screens/MainPage";
import Category from "./src/screens/Category";
import Setting from "./src/screens/Setting";
import SearchResult from "./src/screens/SearchResult";
import Search from "./src/screens/Search";
import ProjectList from "./src/screens/ProjectList";
import ProjectScreen from "./src/screens/ProjectScreen";
import FreelancerList from "./src/screens/FreelancerList";
import FreelancerScreen from "./src/screens/FreelancerScreen";
import FavoriteList from "./src/screens/FavoriteList";
import MyProject from "./src/screens/MyProject";

import ChattingList from "./src/screens/not complete/ChattingList";
import MyCircle from "./src/screens/not complete/MyCircle";
import MyPage from "./src/screens/not complete/MyPage";
import CreateNewProject from "./src/screens/not complete/CreateNewProject";
import SignUpPage from "./src/screens/SignUpPage";
import WriteMyInfo from "./src/screens/not complete/WriteMyInfo";
import Calendar from "./src/components/inputForm/Calendar";

/********************************************************************/
import Project1 from "./src/tempScreen/Project1";
import Project2 from "./src/tempScreen/Project2";
import Project3 from "./src/tempScreen/Project3";
import Project4 from "./src/tempScreen/Project4";
import Project5 from "./src/tempScreen/Project5";

import Freelancer1 from "./src/tempScreen/Freelancer1";
import Freelancer2 from "./src/tempScreen/Freelancer2";
import Freelancer3 from "./src/tempScreen/Freelancer3";
import Freelancer4 from "./src/tempScreen/Freelancer4";
import Freelancer5 from "./src/tempScreen/Freelancer5";
/********************************************************************/
import Temp from "./temp";

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
    /*************************************/
    Project1: { screen: Project1 },
    Project2: { screen: Project2 },
    Project3: { screen: Project3 },
    Project4: { screen: Project4 },
    Project5: { screen: Project5 },

    Freelancer1: { screen: Freelancer1 },
    Freelancer2: { screen: Freelancer2 },
    Freelancer3: { screen: Freelancer3 },
    Freelancer4: { screen: Freelancer4 },
    Freelancer5: { screen: Freelancer5 }
    /*************************************/
  },
  {
    initialRouteKey: "LoginPage",
    headerMode: "none"
  }
);

let Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <Navigation />;
  }
}
