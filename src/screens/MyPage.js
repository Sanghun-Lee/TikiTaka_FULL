//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import Statusbar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";

import Freelancer from "../components/myPage/Freelancer";

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
class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <Header
          navigation={this.props.navigation}
          centerText="마이페이지"
          Right="ios-create"
          RightOnPress={this._PressMyInfo}
        />
        <ScrollView style={{ flexDirection: "column" }}>
          <View style={{ height: 200 }}>
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
            <TouchableOpacity
              style={styles.passwordChange}
              onPress={this._PasswordChange}
            >
              <Text style={{ color: "skyblue", fontSize: 15 }}>
                비밀번호 변경
              </Text>
            </TouchableOpacity>
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
          {freelancer.freeflag ? (
            <Freelancer
              intro={freelancer.intro}
              grade={freelancer.grade}
              categoryList={freelancer.categoryList}
              lisenceList={freelancer.lisenceList}
              educationList={freelancer.educationList}
              careerList={freelancer.careerList}
            />
          ) : (
            <Text style={{ textAlign: "center" }}>
              현재 프리랜서가 아닙니다.
            </Text>
          )}
        </ScrollView>
      </View>
    );
  }
  _PressMyInfo = () => {
    this.props.navigation.navigate("WriteMyInfo");
  };
  _PasswordChange = () => {
    this.props.navigation.navigate("PasswordChange");
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  passwordChange: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 60,
    marginVertical: 100,
    borderColor: "skyblue",
    justifyContent: "center",
    alignItems: "center"
  },
  nickname: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 20,
    marginBottom: 20
  }
});

//make this component available to the app
export default MyPage;
