//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import ProjectThumbnail from "../components/Proj&Free/Project/ProjectThumbnail";
import NewProjectButton from "../components/MyProject/BottomButton";

const projectList = [
  {
    title: "티키타카",
    price: 0,
    dueDate: "19.07.31",
    maxPeople: 6,
    organization: "영남대학교"
  }
];

// create a component
class MyProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="내 프로젝트" />
        <ScrollView>
          <Subtitle subtitle="내 프로젝트 목록" />
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
              />
            );
          })}
        </ScrollView>
        <NewProjectButton
          title="새 프로젝트 만들기"
          IconName="ios-create"
          onPress={this._PressNewProject}
        />
      </View>
    );
  }

  _PressNewProject = () => {
    this.props.navigation.navigate("CreateNewProject");
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//make this component available to the app
export default MyProject;
