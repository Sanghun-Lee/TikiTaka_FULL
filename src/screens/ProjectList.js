//import liraries
import React, { Component } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";

import ProjectThumbnail from "../components/Proj&Free/Project/ProjectThumbnail";
import FilterButton from "../components/Proj&Free/common/FilterButton";

const projectList = [
  {
    title: "빅데이터 공모전",
    price: 100000,
    dueDate: "2019.10.8",
    maxPeople: 5,
    organization: "영남대학교",
    navi: "Project1"
  },
  {
    title: "광고 공모전",
    price: 20000,
    dueDate: "2019.08.12",
    maxPeople: 4,
    organization: "영남대학교",
    navi: "Project2"
  },
  {
    title: "같이 연구 하실분",
    price: 20000,
    dueDate: "2019.12.31",
    maxPeople: 3,
    organization: "영남대학교",
    navi: "Project3"
  },
  {
    title: "어플 디자인팀 구해요",
    price: 100000,
    dueDate: "2019.10.21",
    maxPeople: 4,
    organization: "영남대학교",
    navi: "Project4"
  },
  {
    title: "티키타카 프로젝트",
    price: 0,
    dueDate: "2019.07.31",
    maxPeople: 6,
    organization: "영남대학교",
    navi: "Project5"
  }
];

// create a component
class ProjectList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프로젝트 리스트"
          Right="ios-search"
          RightOnPress={this._PressSearchIcon}
        />
        <Subtitle subtitle="프로젝트" />
        <ScrollView>
          {projectList.map((projectList, index) => {
            return (
              <ProjectThumbnail
                title={projectList.title}
                price={projectList.price}
                dueDate={projectList.dueDate}
                maxPeople={projectList.maxPeople}
                organization={projectList.organization}
                key={index}
                navigation={this.props.navigation}
                navi={projectList.navi}
              />
            );
          })}
        </ScrollView>
        <FilterButton
          title="필터 적용"
          IconName="ios-options"
          onPress={() => alert("button Pressed")}
        />
      </View>
    );
  }
  _PressSearchIcon = () => {
    this.props.navigation.navigate("Search");
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//make this component available to the app
export default ProjectList;
