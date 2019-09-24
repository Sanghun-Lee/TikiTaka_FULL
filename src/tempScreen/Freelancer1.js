//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";

import Contents from "../components/Proj&Free/Freelancer/Contents";

import List from "../components/Proj&Free/common/List";
import Button from "../components/Proj&Free/common/MessageButton";
import Favorite from "../components/Proj&Free/common/FavoriteButton";

const freelancer = {
  userId: "aaa@aaa.com",
  nickname: "SSH",
  intro: "저는 영남대학교의 산업 디자인과에 다니고 있습니다.",
  grade: 3,
  organization: "영남대학교",
  categoryList: ["디자인"],
  educationList: [
    {
      place: "계성고등학교",
      grade: 3
    },
    {
      place: "영남대학교",
      grade: 3
    }
  ],
  lisenceList: []
};

// create a component
class FreelancerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프리랜서 상세 화면"
        />
        <ScrollView>
          <Text style={styles.nickname}>{freelancer.nickname}</Text>
          <Text style={styles.organization}>
            {freelancer.organization} / 학년 : {freelancer.grade}
          </Text>
          <Subtitle subtitle="한 줄 소개" />
          <Text style={styles.intro}>{freelancer.intro}</Text>
          <Subtitle subtitle="주 활동 카테고리" />
          {freelancer.categoryList.map((categoryList, index) => {
            return <List first={categoryList} key={index} />;
          })}
          <Subtitle subtitle="학력" />
          {freelancer.educationList.map((educationList, index) => {
            return (
              <List
                first={educationList.place}
                second={educationList.grade}
                key={index}
              />
            );
          })}
          <Subtitle subtitle="자격증 리스트" />
          {freelancer.lisenceList.map((lisenceList, index) => {
            return (
              <List
                first={lisenceList.lisence}
                second={lisenceList.getDate}
                key={index}
              />
            );
          })}
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
  nickname: {
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
  intro: {
    fontSize: 20,
    margin: 20
  }
});

//make this component available to the app
export default FreelancerScreen;
