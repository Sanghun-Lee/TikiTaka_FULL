//import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";

import Freelancer from "../components/myPage/Freelancer";

import Button from "../components/Proj&Free/common/MessageButton";
import Favorite from "../components/Proj&Free/common/FavoriteButton";

// 데이터가 이렇게 왔다고 하자
const freelancer = {
  userId: "paa0609@naver.com",
  name: "이상훈",
  nickname: "hun",
  location: "대구",
  organization: "영남대학교",
  freeflag: 1,
  intro: "잘 부탁드립니다.",
  grade: 4,
  categoryList: ["코딩", "디자인"],
  lisenceList: ["정보처리기사", "6시그마"],
  educationList: [
    {
      getDate: "2011-03-01",
      things: "경상고등학교"
    },
    {
      getDate: "2014-03-02",
      things: "영남대학교"
    }
  ],
  careerList: [
    {
      getDate: "2017-08-01",
      things: "맥도날드 알바"
    }
  ]
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
        <ScrollView style={{ flexDirection: "column" }}>
          <View style={{ height: 130 }}>
            <View style={{ flex: 2, flexDirection: "row", marginBottom: 20 }}>
              <Image
                source={require("../../assets/images/Rayon.png")}
                style={{ width: 80, height: 80, borderRadius: 40, margin: 20 }}
              />
              <View style={{ flexDirection: "column", padding: 20 }}>
                <Text style={{ fontSize: 20, color: "#686a70" }}>
                  {freelancer.userId}
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>
                  {freelancer.name}
                </Text>
              </View>
            </View>
          </View>
          <Subtitle subtitle="기본 정보" />
          <View style={{ marginTop: 10 }}>
            <Text style={styles.nickname}>닉네임 : {freelancer.nickname}</Text>
            <Text style={styles.nickname}>
              속한 조직 : {freelancer.organization}
            </Text>
            <Text style={styles.nickname}>지역 : {freelancer.location}</Text>
          </View>
          {/* 프리랜서면 추가적인 정보가 오고 프리랜서가 아니면 프리랜서가 아니라는정보가 온다 */}
          <Freelancer
            intro={freelancer.intro}
            grade={freelancer.grade}
            categoryList={freelancer.categoryList}
            lisenceList={freelancer.lisenceList}
            educationList={freelancer.educationList}
            careerList={freelancer.careerList}
          />
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
  nickname: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 20,
    marginBottom: 20
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

//make this component available to the app
export default FreelancerScreen;
