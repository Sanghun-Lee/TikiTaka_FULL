import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/MainPage/MainHeader";

class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header />

        <ScrollView>
          <View style={{ height: 170, backgroundColor: "#bbb" }}>
            <Text>광고가 올 공간</Text>
          </View>
          <View style={{ height: 170, backgroundColor: "skyblue" }}>
            <Text>카테고리 리스트가 올 공간</Text>
          </View>
          <View style={{ height: 1000, backgroundColor: "yellow" }}>
            <Text>타임라인이 올 공간</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
