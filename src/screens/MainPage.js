import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import Header from "../components/MainPage/MainHeader";

import StatusBar from "../components/common/StatusBar";
import { TouchableOpacity } from "react-native-gesture-handler";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#38C8EC",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Drawer</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{ flex: 1 }}>
          <MenuDrawer
            open={this.state.open}
            drawerPercentage={80}
            animationTime={250}
            opacity={0.4}
            drawerContent={this.drawerContent()}
          >
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
          </MenuDrawer>
        </View>
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
