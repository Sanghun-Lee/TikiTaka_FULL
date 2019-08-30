import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import SettingItem from "../components/Setting/SettingItem";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false,
      switch2Value: true,
      switch3Value: false,
      switch4Value: true
    };
  }
  toggleSwitch1 = value => {
    this.setState({ switch1Value: value });
  };
  toggleSwitch2 = value => {
    this.setState({ switch2Value: value });
  };
  toggleSwitch3 = value => {
    this.setState({ switch3Value: value });
  };
  toggleSwitch4 = value => {
    this.setState({ switch4Value: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <Subtitle subtitle="알림" />
        <SettingItem
          SettingContext="애플리케이션 광고 알림"
          toggleSwitchs={this.toggleSwitch1}
          switchValues={this.state.switch1Value}
        />
        <SettingItem
          SettingContext="애플리케이션 업데이트 알림"
          toggleSwitchs={this.toggleSwitch2}
          switchValues={this.state.switch2Value}
        />
        <SettingItem
          SettingContext="채팅 푸쉬 알림"
          toggleSwitchs={this.toggleSwitch3}
          switchValues={this.state.switch3Value}
        />
        <SettingItem
          SettingContext="타임라인 푸쉬 알림"
          toggleSwitchs={this.toggleSwitch4}
          switchValues={this.state.switch4Value}
        />
      </View>
    );
  }
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
