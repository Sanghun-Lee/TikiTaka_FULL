import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MarketingButton from "./MarketingButton";
import DocumentButton from "./DocumentButton";
import LessonButton from "./LessonButton";
import ShowmoreButton from "./ShowmoreButton";
import DesignButton from "./DesignButton";
import VideoButton from "./VideoButton";
import TranslateButton from "./TranslateButton";
import ContentsmakingButton from "./ContentsmakingButton";

export default class MainCategoryButton extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group2}>
          <MarketingButton 
            style={styles.marketingButton} 
            navigation={this.props.navigation}
          />
          <DocumentButton 
            style={styles.documentButton}
            navigation={this.props.navigation}
          />
          <LessonButton 
            style={styles.lessonButton} 
            navigation={this.props.navigation}
          />
          <ShowmoreButton 
            style={styles.showmoreButton} 
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.group}>
          <DesignButton 
            style={styles.designButton} 
            navigation={this.props.navigation}
          />
          <VideoButton 
            style={styles.videoButton} 
            navigation={this.props.navigation}
          />
          <TranslateButton 
            style={styles.translateButton} 
            navigation={this.props.navigation}
          />
          <ContentsmakingButton 
            style={styles.contentsmakingButton} 
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.group3}>
          <Text style={styles.text}>디자인</Text>
          <Text style={styles.text2}>영상</Text>
          <Text style={styles.text3}>번역</Text>
          <Text style={styles.text4}>콘텐츠제작</Text>
        </View>
        <View style={styles.group4}>
          <Text style={styles.text5}>마케팅</Text>
          <Text style={styles.text6}>문서</Text>
          <Text style={styles.text7}>레슨</Text>
          <Text style={styles.text8}>더보기</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  group2: {
    top: 90,
    left: 0,
    width: 375.24,
    height: 42,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  marketingButton: {
    width: 44,
    height: 42
  },
  documentButton: {
    width: 44,
    height: 42
  },
  lessonButton: {
    width: 44,
    height: 42
  },
  showmoreButton: {
    width: 44,
    height: 42
  },
  group: {
    top: 14,
    left: 0,
    width: 375.24,
    height: 42,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  designButton: {
    width: 44,
    height: 42
  },
  videoButton: {
    width: 44,
    height: 42
  },
  translateButton: {
    width: 44,
    height: 42
  },
  contentsmakingButton: {
    width: 44,
    height: 42
  },
  group3: {
    top: 62,
    left: 35,
    width: 315.25,
    height: 10,
    position: "absolute"
  },
  text: {
    top: 0,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text2: {
    top: 0,
    left: 99,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text3: {
    top: 0,
    left: 191.36,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text4: {
    top: 0,
    left: 272,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  group4: {
    top: 138,
    left: 35,
    width: 306.6,
    height: 10,
    position: "absolute"
  },
  text5: {
    top: 0,
    left: 0,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text6: {
    top: 0,
    left: 99,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text7: {
    top: 0,
    left: 191.36,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  text8: {
    top: 0,
    left: 280.65,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  }
});
