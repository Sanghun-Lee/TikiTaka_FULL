import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import FreeLancerTopBox from "./FreeLancerTopBox";
import FreelancerRate from "./FreelancerRate";
import FreeLancerDescription from "./FreeLancerDescription";

export default class PortpolioScrollarea extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ScrollView
          horizontal={false}
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <FreeLancerTopBox style={styles.freeLancerTopBox} />
          <FreelancerRate style={styles.freelancerRate} />
          <FreeLancerDescription style={styles.freeLancerDescription} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  scrollArea: {
    top: 0,
    left: 0,
    width: 375.24,
    height: 520.1,
    position: "absolute",
    flexDirection: "column"
  },
  scrollArea_contentContainerStyle: {
    width: 375.24,
    height: 651
  },
  freeLancerTopBox: {
    width: 375,
    height: 203
  },
  freelancerRate: {
    width: 375.24,
    height: 85
  },
  freeLancerDescription: {
    width: 375.24,
    height: 363
  }
});
