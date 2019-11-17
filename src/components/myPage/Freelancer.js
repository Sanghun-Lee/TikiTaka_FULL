import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Subtitle from "../common/Subtitle";
import List from "../Proj&Free/common/List";

export default class Freelancer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Subtitle subtitle="한 줄 소개" />
        <Text style={styles.intro}>{this.props.intro}</Text>
        <Subtitle subtitle="주 활동 카테고리" />
        {this.props.categoryList.map((categoryList, index) => {
          return <List first={categoryList} key={index} />;
        })}
        <Subtitle subtitle="학력" />
        {this.props.educationList.map((educationList, index) => {
          return (
            <List
              first={educationList.things}
              second={educationList.getDate}
              key={index}
            />
          );
        })}
        <Subtitle subtitle="자격증 리스트" />
        {this.props.lisenceList.map((lisenceList, index) => {
          return <List first={lisenceList} key={index} />;
        })}
        <Subtitle subtitle="경력사항" />
        {this.props.careerList.map((careerList, index) => {
          return (
            <List
              first={careerList.things}
              second={careerList.getDate}
              key={index}
            />
          );
        })}
      </View>
    );
  }
}

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
