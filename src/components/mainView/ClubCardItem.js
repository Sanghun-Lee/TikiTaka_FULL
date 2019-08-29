import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import ClubTitleBar from "./ClubTitleBar";
import { Center } from "@builderx/utils";

export default class ClubCardItem extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ClubTitleBar style={styles.clubTitleBar} />
        <Center horizontal>
          <Image
            source={require("../../assets/Banner21.png")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </Center>
        <Text style={styles.text}>
          &quot;대구대학교 사진동아리에서 프로젝트를 찾고있습니다.&quot;{"\n"}
          {"\n"}각종 공모전과 전국구 대회 수상경력이 있으며 자세한 내용은
          대구대학교 사진동아리의{"\n"}상세 페이지에서 찾아보시길 바랍니다.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  clubTitleBar: {
    top: 6,
    left: "3.59%",
    width: 349,
    height: 33,
    position: "absolute"
  },
  image: {
    top: 46,
    left: 9,
    width: 358,
    height: 119,
    position: "absolute"
  },
  text: {
    top: 180,
    left: 10,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  }
});
