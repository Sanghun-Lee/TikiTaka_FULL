import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import ProjectThumbnail from "../components/Proj&Free/Project/ProjectThumbnail";
import FreelancerThumbnail from "../components/Proj&Free/Freelancer/FreelancerThumbnail";

const projectList = [
  {
    title: "빅데이터 공모전",
    price: 100000,
    dueDate: "19.10.8",
    maxPeople: 5,
    organization: "영남대학교",
    navi: "Project1"
  },
  {
    title: "광고 공모전",
    price: 20000,
    dueDate: "19.08.12",
    maxPeople: 4,
    organization: "영남대학교",
    navi: "Project2"
  },
  {
    title: "같이 연구 하실분",
    price: 20000,
    dueDate: "19.12.31",
    maxPeople: 3,
    organization: "영남대학교",
    navi: "Project3"
  }
];

const freelancerList = [
  {
    major: "산업디자인",
    organization: "영남대학교",
    grade: 3,
    intro: "저는 영남대학교의 산업 디자인과에 다니고 있습니다.",
    navi: "Freelancer1"
  },
  {
    major: "컴퓨터 공학과",
    organization: "영남대학교",
    grade: 4,
    intro: "C언어와 JAVA언어를 주로 사용합니다.",
    navi: "Freelancer2"
  },
  {
    major: "기계공학과",
    organization: "영남대학교",
    grade: 3,
    intro: "2곳의 공모전에서 수상한 경험이 있습니다.",
    navi: "Freelancer3"
  }
];

export default class SearchResult extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="검색 결과"
          Right="ios-search"
          RightOnPress={this._PressSearchIcon}
        />
        <ScrollView>
          <Subtitle subtitle="검색 결과 - 프로젝트" />
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
          <View style={styles.tapMore}>
            <TouchableOpacity
              onPress={this._handlePressProjectMore}
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.tapMoreText}>더 보기</Text>
              <Image
                source={require("../../assets/images/Freelancer/FreelancerThumbnail/SearchMoreIcon.png")}
                style={styles.tapMoreIcon}
              />
            </TouchableOpacity>
          </View>
          <Subtitle subtitle="검색결과 - 프리랜서" />
          {freelancerList.map((freelancerList, index) => {
            return (
              <FreelancerThumbnail
                major={freelancerList.major}
                organization={freelancerList.organization}
                grade={freelancerList.grade}
                intro={freelancerList.intro}
                key={index}
                navigation={this.props.navigation}
                navi={freelancerList.navi}
              />
            );
          })}
          <View style={styles.tapMore}>
            <TouchableOpacity
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              onPress={this._handlePressFreelancerMore}
            >
              <Text style={styles.tapMoreText}>더 보기</Text>
              <Image
                source={require("../../assets/images/Freelancer/FreelancerThumbnail/SearchMoreIcon.png")}
                style={styles.tapMoreIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text />
      </View>
    );
  }

  _handlePressProjectMore = () => {
    this.props.navigation.navigate("ProjectList");
  };
  _handlePressFreelancerMore = () => {
    this.props.navigation.navigate("FreelancerList");
  };
  _PressSearchIcon = () => {
    this.props.navigation.navigate("Search");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tapMore: {
    height: 35,
    alignItems: "flex-end"
  },
  tapMoreText: {
    textAlign: "right",
    textAlignVertical: "center",
    fontSize: 10,
    marginRight: 8
  },
  tapMoreIcon: {
    marginLeft: 3,
    width: 5.31,
    height: 8.69,
    marginRight: 10
  }
});
