//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import Button from "../components/Proj&Free/common/MessageButton";
import Favorite from "../components/Proj&Free/common/FavoriteButton";
import List from "../components/Proj&Free/common/List";

const project = {
  projectId: 12345,
  userId: "aaa@aaa.com",
  organization: "영남대학교",
  writeDate: "2019.04.20",
  title: "티키타카 프로젝트",
  price: 0,
  period: 180,
  dueDate: "2019.07.31",
  description: "컴퓨터공학과 CDP 티키타카입니다. 같이 하실분 신청해 주세요",
  maxPeople: 6,
  categoryList: ["코딩", "디자인"],
  freeList: [
    {
      name: "김민수",
      role: "팀장"
    },
    {
      name: "이상훈",
      role: "팀원1"
    }
  ],
  candiList: []
};

// create a component
class ProjectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프로젝트 상세화면"
        />
        <ScrollView>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.organization}>{project.organization}</Text>
          <Subtitle subtitle="참가 인원" />
          {project.freeList.map((freeList, index) => {
            return (
              <List first={freeList.name} second={freeList.role} key={index} />
            );
          })}
          <Subtitle subtitle="카테고리" />
          {project.categoryList.map((categoryList, index) => {
            return <List first={categoryList} key={index} />;
          })}
          <Subtitle subtitle="설명" />
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.info}>모집 기한 : {project.dueDate}</Text>
          <Text style={styles.info}>작업 기간 : {project.period}일</Text>
          <Text style={styles.info}>총 인원 : {project.maxPeople}명</Text>
          <Text style={styles.info}>금액 : {project.price}원</Text>

          <View style={{ height: 100, flexDirection: "row" }}>
            <View style={[styles.center, { flex: 5 }]}>
              <Button text="메시지 보내기" onPress={this._PressMessageButton} />
            </View>
            <View style={[styles.center, { flex: 1 }]}>
              <Favorite />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  _PressMessageButton = () => {
    alert("메시지 보내기");
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    margin: 20
  },
  organization: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 20,
    margin: 10
  },
  info: {
    fontSize: 15,
    margin: 5,
    marginLeft: 10
  }
});

//make this component available to the app
export default ProjectScreen;
