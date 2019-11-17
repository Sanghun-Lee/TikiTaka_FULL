import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import { Content, Drawer } from "native-base";

import { Ionicons } from "@expo/vector-icons";

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
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png")
  },
  {
    writer: "김민수",
    writeDate: "2019년 4월 25일",
    description: "님이 티키타카 프로젝트에 참여하였습니다.",
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png")
  },
  {
    writer: "티키타카",
    writeDate: "2019년 6월 5일",
    description: "프로젝트의 등록일까지 30일 남았습니다.",
    thumbnail: require("../../assets/images/MainPage/TimeLine/daeguCircle01.png")
  }
];

class MainPage extends Component {
  constructor(props) {
    super(props);

    this._CategoryOnPress = this._CategoryOnPress.bind(this);
  }

  state = {
    name: "hun",
    category: ""
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
                <View style={styles.container}>
                  <View style={styles.eachSection}>
                    <Category
                      name="md-brush"
                      onPress={() => this._CategoryOnPress("디자인")}
                      text="디자인"
                    />
                    <Category
                      name="logo-youtube"
                      onPress={() => this._CategoryOnPress("영상")}
                      text="영상"
                    />
                    <Category
                      name="logo-google"
                      onPress={() => this._CategoryOnPress("번역")}
                      text="번역"
                    />
                    <Category
                      name="logo-python"
                      onPress={() => this._CategoryOnPress("코딩")}
                      text="코딩"
                    />
                  </View>
                  <View style={styles.eachSection}>
                    <Category
                      name="ios-musical-notes"
                      onPress={() => this._CategoryOnPress("음악")}
                      text="음악"
                    />
                    <Category
                      name="ios-cog"
                      onPress={() => this._CategoryOnPress("공학")}
                      text="공학"
                    />
                    <Category
                      name="ios-book"
                      onPress={() => this._CategoryOnPress("스터디")}
                      text="스터디"
                    />
                    <Category
                      name="ios-more"
                      onPress={() => this._CategoryOnPress("기타")}
                      text="기타"
                    />
                  </View>
                </View>
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

  _CategoryOnPress = async category => {
    await this.setState({ category });
    // alert(this.state.category);
    this.props.navigation.navigate("Category");
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
  },
  eachSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
