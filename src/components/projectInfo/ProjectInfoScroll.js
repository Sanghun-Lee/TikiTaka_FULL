import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Center } from "@builderx/utils";
import ProjectInfoCrewPanel from "./ProjectInfoCrewPanel";
import ProjectInfoImageBanner from "./ProjectInfoImageBanner";
import ProjectInfoDetailBox from "./ProjectInfoDetailBox";

export default class ProjectInfoScroll extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center vertical>
          <ScrollView
            horizontal={false}
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <ProjectInfoImageBanner style={styles.projectInfoImageBanner} />
            <ProjectInfoCrewPanel style={styles.projectInfoCrewBox} />
            <ProjectInfoDetailBox style={styles.projectInfoDetailBox} />
          </ScrollView>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  scrollArea: {
    left: "0.01%",
    width: 374.97,
    height: 520.1,
    position: "absolute",
    flexDirection: "column"
  },
  scrollArea_contentContainerStyle: {
    width: 375.18,
    height: 663.54
  },
  projectInfoImageBanner: {
    width: 375,
    height: 188
  },
  projectInfoCrewBox: {
    width: 375.18,
    height: 237.54
  },
  projectInfoDetailBox: {
    width: 375,
    height: 238
  }
});