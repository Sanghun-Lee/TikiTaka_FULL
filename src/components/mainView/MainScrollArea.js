import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import MainCategoryButton from "./MainCategoryButton";
import ClubCardItem from "./ClubCardItem";

export default class MainScrollArea extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
          <ScrollView
            horizontal={false}
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group1}>
              <ScrollView
                horizontal={true}
                style={styles.scrollArea2}
                contentContainerStyle={styles.scrollArea2_contentContainerStyle}
              >
                <Image
                  source={require("../../assets/MainScreenBanner2.png")}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
                <Image
                  source={require("../../assets/Banner2.png")}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
              </ScrollView>
            </View>
            <MainCategoryButton 
              style={styles.mainCategoryButton}
              navigation={this.props.navigation} 
            />
            <ClubCardItem style={styles.clubCardItem} />
            <ClubCardItem style={styles.clubCardItem2} />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  scrollArea: {
    left: "0.01%", // 수직 스크롤 고정
    width: 375.24,
    height: 603, // 스크롤 화면의 한번에 보여지는 길이
    position: "absolute",
    flexDirection: "column"
  },
  scrollArea_contentContainerStyle: {
    width: 375.62,
    height: 772 // 스크롤할 모든 콘텐츠의 총 길이
  },
  scrollArea2: {
    flexDirection: "row",
    width: 375.24,
    height: 148
  },
  group1: {
    flexDirection: "row",
    width: 375.24,
    height: 148
  },
  scrollArea2_contentContainerStyle: {
    width: 750.48,
    height: 148,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    top: 0,
    left: 0,
    width: 375.24,
    height: 148
  },
  image2: {
    top: 0,
    left: 375.24,
    width: 375.24,
    height: 148,
    position: "absolute"
  },
  mainCategoryButton: {
    width: 375.24,
    height: 166
  },
  clubCardItem: {
    width: 376,
    height: 229
  },
  clubCardItem2: {
    width: 376,
    height: 229
  }
});
