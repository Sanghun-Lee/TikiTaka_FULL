import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Content, Drawer } from "native-base";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Advertise from "../components/MainPage/Advertise";
import Category from "../components/MainPage/Category";
import TimeLine from "../components/MainPage/TimeLine";
import DrawerPage from "../components/MainPage/DrawerPage";

const TimeLineContents = [
  {
    writer: "이상훈",
    writeDate: "2019년 4월 16일",
    description: "님이 티키타카 프로젝트를 새롭게 등록하였습니다.",
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png"),
    onPress: () => {
      alert("...");
    }
  },
  {
    writer: "김민수",
    writeDate: "2019년 4월 25일",
    description: "님이 티키타카 프로젝트에 참여하였습니다.",
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png"),
    onPress: this._cardOnPress
  },
  {
    writer: "티키타카",
    writeDate: "2019년 6월 5일",
    description: "프로젝트의 등록일까지 30일 남았습니다.",
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png"),
    onPress: this._cardOnPress
  }
];

class MainPage extends Component {
  state = {
    name: "hun"
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{ flex: 1, zIndex: -1 }}>
          <Drawer
            ref={ref => {
              this.drawer = ref;
            }}
            content={
              <DrawerPage
                navigation={this.props.navigation}
                name={this.state.name}
              />
            }
            onClose={() => this.closeDrawer()}
          >
            <Header
              navigation={this.props.navigation}
              Left="ios-menu"
              LeftOnPress={this.openDrawer}
            />
            <ScrollView>
              <View style={{ height: 170 }}>
                <Advertise />
              </View>
              <View style={{ height: 170, marginTop: 10, marginBottom: 10 }}>
                <Category navigation={this.props.navigation} />
              </View>
              <Content>
                {TimeLineContents.map((timeline, index) => {
                  return (
                    <TimeLine
                      writer={timeline.writer}
                      writeDate={timeline.writeDate}
                      description={timeline.description}
                      thumbnail={timeline.thumbnail}
                      onPress={timeline.onPress}
                      key={index}
                    />
                  );
                })}
              </Content>
            </ScrollView>
          </Drawer>
        </View>
      </View>
    );
  }
  _cardOnPress = () => {
    alert("card pressed");
  };
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleBar: {
    height: 44,
    flexDirection: "row",
    backgroundColor: "#38C8EC"
  },
  tikitakaText: {
    flex: 6,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 16
  }
});
