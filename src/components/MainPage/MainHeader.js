import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MenuDrawer from "react-native-side-drawer";

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  _eachSection = (image, text, size) => {
    // ! MainHeader 아래에 ScrollView가 오니까
    return (
      <TouchableOpacity style={styles.section}>
        <View style={styles.picturePart}>
          <Image style={size} source={image} />
        </View>
        <View style={styles.textPart}>
          <Text style={{ color: "white", fontSize: 15 }}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        {/* 뒤로가기버튼과 프로필 사진이 나오는 부분 */}
        <View style={styles.topSection}>
          <View style={styles.backButtonPart}>
            <TouchableOpacity onPress={this.toggleOpen}>
              <Image
                source={require("../../../assets/images/SideBack.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.personPicturePart}>
            <TouchableOpacity style={{ marginTop: 5 }}>
              <Image
                style={{ width: 85, height: 85 }}
                source={require("../../../assets/images/SubPage/SideProfile01.png")}
              />
              <Text
                style={{ color: "white", fontSize: 15, textAlign: "center" }}
              >
                고민우
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 채팅방, 내 프로젝트, 동아리, 좋아요 목록 이 4 파트 */}
        {this._eachSection(
          require("../../../assets/images/SubPage/SubMessage.png"),
          "채팅방",
          { width: 53, height: 50 }
        )}
        {this._eachSection(
          require("../../../assets/images/SubPage/SubMyProject.png"),
          "내 프로젝트",
          { width: 49.12, height: 50 }
        )}
        {this._eachSection(
          require("../../../assets/images/SubPage/SubMyCircle.png"),
          "내 동아리",
          { width: 51, height: 35.75 }
        )}
        {this._eachSection(
          require("../../../assets/images/SubPage/SubMyLike.png"),
          "좋아요 목록",
          { width: 51, height: 37.7 }
        )}
        {/* 설정버튼과 로그아웃버튼이 존재하는 곳 */}
        <View style={styles.bottomSection}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginTop: 25,
                alignItems: "flex-start",
                marginLeft: 15
              }}
              onPress={() => {
                this.props.navigation.naviagte("Setting");
              }}
            >
              <Image
                source={require("../../../assets/images/SubPage/SubSetting.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                marginTop: 25,
                alignItems: "flex-end",
                marginRight: 15
              }}
            >
              <Image
                source={require("../../../assets/images/SubPage/SubLogout.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <MenuDrawer
            open={this.state.open} // {이 안이 true이면 drawer가 나온다}
            drawerContent={this.drawerContent()} // 출력될 Drawer의 내용을 호출
            drawerPercentage={80} // Drawer이 나오는 사이즈 조절
            animationTime={250}
            overlay={true}
            opacity={0.4}
          >
            <TouchableOpacity onPress={this.toggleOpen}>
              <Image
                source={require("../../../assets/images/MainPage/TitleBarSubPage.png")}
                style={styles.searchIconImage}
              />
            </TouchableOpacity>
          </MenuDrawer>
        </View>

        <Text style={styles.headerText}>티키타카</Text>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={() => {
            this.props.navigation.navigate("SearchScreen");
          }}
        >
          <Image
            source={require("../../../assets/images/MainPage/TitleBarSearch.png")}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

_handleSearchButton = () => {
  this.props.navigation.navigate("Search");
};
_handlePressBackButton = () => {
  this.props.navigation.navigate(this.props.postScreen);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#35CBEE",
    flexDirection: "row",
    height: 43.26
  },
  backTextStyle: {
    fontSize: 13,
    color: "white",
    alignItems: "center"
  },
  headerText: {
    flex: 6,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"
  },
  searchIconView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 13
  },
  searchIconImage: {
    height: 20,
    width: 20
  },
  /// Drawer
  animatedBox: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#38C8EC",
    padding: 10
  },
  topSection: {
    flex: 2,
    flexDirection: "column"
  },
  backButtonPart: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  personPicturePart: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10
  },
  section: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "white"
  },
  picturePart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textPart: {
    flex: 2,
    justifyContent: "center",
    marginLeft: 15
  },
  chatSection: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#32a852"
  },
  myProjectSection: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#9e289a"
  },
  myCircleSection: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#bd204f"
  },
  favoriteList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#a3c722"
  },
  bottomSection: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "white"
  }
});
