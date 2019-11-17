//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import Button from "../components/Proj&Free/common/MessageButton";
import Favorite from "../components/Proj&Free/common/FavoriteButton";
import List from "../components/Proj&Free/common/List";

import People from "../components/Proj&Free/Project/People";

// 이런식으로 데이터가 왔다고 가정한다.
const project = {
  categoryList: ["코딩", "디자인"],
  freeList: ["_id-1", "_id-2"],
  candiList: ["_candi-1", "_candi-2"],
  _id: "ObjectId",
  projectId: 5,
  userId: "paa0609@naver.com",
  nickname: "hello",
  organization: "영남대학교",
  title: "hello world",
  price: 10000,
  period: 20,
  description: "첫 테스트 프로젝트 페이지",
  maxPeople: 10,
  dueDate: "2019-12-10",
  writeDate: "2019-11-07"
};

const candiList = [
  {
    _id: "Object1",
    userId: "aaa@naver.com",
    name: "김철수",
    nickname: "SooKim",
    location: "대구"
  },
  {
    _id: "Object2",
    userId: "bbb@naver.com",
    name: "철철수",
    nickname: "SooSoo",
    location: "대구"
  }
];

const freeList = [
  {
    _id: "Object1",
    userId: "aaa@naver.com",
    name: "김철수",
    nickname: "SooKim",
    location: "대구"
  },
  {
    _id: "Object2",
    userId: "bbb@naver.com",
    name: "철철수",
    nickname: "SooSoo",
    location: "대구"
  }
];

// create a component
class ProjectScreen extends Component {
  constructor(props) {
    super(props);

    this._cancelOnPress = this._cancelOnPress.bind(this);
    this._prooveOnPress = this._prooveOnPress.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프로젝트 상세화면"
          Right="md-trash"
          RightOnPress={this._PressDeleteProject}
        />
        <ScrollView>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.organization}>{project.organization}</Text>
          <Subtitle subtitle="카테고리" />
          {project.categoryList.map((categoryList, index) => {
            return <List first={categoryList} key={index} />;
          })}

          <Subtitle subtitle="설명" />
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.info}>작성자 이름 : {project.name}</Text>
          <Text style={styles.info}>모집 기한 : {project.dueDate}</Text>
          <Text style={styles.info}>작업 기간 : {project.period} 일</Text>
          <Text style={styles.info}>총 인원 : {project.maxPeople} 명</Text>
          <Text style={styles.info}>금액 : {project.price} 원</Text>
          <Text style={styles.info}>글 작성일 : {project.writeDate}</Text>

          <View style={{ height: 100, flexDirection: "row" }}>
            <View style={[styles.center, { flex: 5 }]}>
              <Button
                text="프로젝트 참가하기"
                onPress={this._PressMessageButton}
              />
            </View>
            <View style={[styles.center, { flex: 1 }]}>
              <Favorite />
            </View>
          </View>
          <Subtitle subtitle="참가 인원" />
          {freeList.map((freeList, index) => {
            return (
              <People
                key={index}
                name={freeList.name}
                proove={false}
                cancelOnPress={() => this._cancelOnPress(freeList._id)}
              />
            );
          })}
          <Subtitle subtitle="프로젝트 지원자" />
          {candiList.map((candilist, index) => {
            return (
              <People
                key={index}
                name={candilist.name}
                proove={true}
                cancelOnPress={() => this._cancelOnPress(candilist._id)}
                prooveOnPress={() => this._prooveOnPress(candilist._id)}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
  _PressMessageButton = () => {
    alert("메시지 보내기");
  };

  _PressDeleteProject = () => {
    alert(`프로젝트 삭제
    api : project/해당프로젝트_id값 / 성공시 flag = success`);
  };

  _prooveOnPress = userOId => {
    // 승인 api 호출
    // api : /project/해당프로젝트_id?flag=2&userOId=해당유저_id
    alert("userOId : " + userOId);
  };

  _cancelOnPress = userOId => {
    // 취소 api 호출
    // api : /project/해당프로젝트_id?flag=3&userOId=해당유저_id
    alert(`userOId : ${userOId}`);
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
