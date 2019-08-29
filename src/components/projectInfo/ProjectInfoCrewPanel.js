import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProjectInfoSubtitleBar from "./ProjectInfoSubtitleBar";
import { Center } from "@builderx/utils";
import TeamLeaderImage from "./TeamLeaderImage";
import ProjectInfoLeader from "./ProjectInfoLeader";
import ProjectInfoCrew from "./ProjectInfoCrew";

export default class ProjectInfoCrewPanel extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ProjectInfoSubtitleBar style={styles.projectInfoSubtitleBar} />
        <Center horizontal>
          <TeamLeaderImage style={styles.teamLeaderImage} />
        </Center>
        <ProjectInfoLeader style={styles.projectInfoLeader} />
        <ProjectInfoCrew style={styles.projectInfoCrew} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  projectInfoSubtitleBar: {
    top: 0,
    left: 1.44,
    width: 374.56,
    height: 21.35,
    position: "absolute"
  },
  teamLeaderImage: {
    top: 38.25,
    width: 80.63,
    height: 111.75,
    position: "absolute"
  },
  projectInfoLeader: {
    top: 29.13,
    left: 147.5,
    width: 81,
    height: 112,
    position: "absolute"
  },
  projectInfoCrew: {
    top: 150,
    left: "6.38%",
    width: 328,
    height: 80,
    position: "absolute"
  }
});
