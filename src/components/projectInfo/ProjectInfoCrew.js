import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class ProjectInfoCrew extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group5}>
          <Text style={styles.text2}>영상 담당</Text>
          <Text style={styles.text}>이민희</Text>
          <Image
            source={require("../../assets/ec7a8507-b3f8-404d-a2b9-a2ecababd400.jpg")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </View>
        <View style={styles.group4}>
          <Text style={styles.text4}>서지은</Text>
          <Text style={styles.text3}>통계, 자료 담당</Text>
          <Image
            source={require("../../assets/_DSC4284@@.jpg")}
            resizeMode={"stretch"}
            style={styles.image2}
          />
        </View>
        <View style={styles.group3}>
          <Text style={styles.text6}>김한솔</Text>
          <Image
            source={require("../../assets/485474_143538_1212.jpg")}
            resizeMode={"stretch"}
            style={styles.image3}
          />
          <Text style={styles.text5}>스토리 담당</Text>
        </View>
        <Image
          source={require("../../assets/projectTeamMore.png")}
          resizeMode={"contain"}
          style={styles.image4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  group5: {
    width: 54,
    height: 80
  },
  text2: {
    top: "87.5%",
    left: "15.25%",
    color: "#121212",
    position: "absolute",
    fontSize: 7
  },
  text: {
    top: 56,
    left: 10.72,
    color: "#121212",
    position: "absolute",
    fontSize: 12,
    fontWeight: "bold"
  },
  image: {
    top: 0,
    left: "0%",
    width: 54,
    height: 54,
    position: "absolute",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "rgba(53,203,238,1)",
    borderWidth: 2
  },
  group4: {
    width: 70,
    height: 80.5
  },
  text4: {
    top: 56,
    left: 19.44,
    color: "#121212",
    position: "absolute",
    fontSize: 12,
    fontWeight: "bold"
  },
  text3: {
    top: "86.33%",
    left: "0%",
    width: 70,
    height: 11,
    color: "#121212",
    position: "absolute",
    fontSize: 7,
    textAlign: "center"
  },
  image2: {
    top: 0,
    left: "9.93%",
    width: 54,
    height: 54,
    position: "absolute",
    borderRadius: 10,
    borderColor: "#00ccef",
    borderWidth: 2
  },
  group3: {
    width: 54,
    height: 80
  },
  text6: {
    top: 56,
    left: 11.42,
    color: "#121212",
    position: "absolute",
    fontSize: 12,
    fontWeight: "bold"
  },
  image3: {
    top: 0,
    left: 0,
    width: 54,
    height: 54,
    position: "absolute",
    borderRadius: 10,
    borderColor: "#00ccef",
    borderWidth: 2
  },
  text5: {
    top: "87.5%",
    left: "7.2%",
    color: "#121212",
    position: "absolute",
    fontSize: 7,
    textAlign: "center"
  },
  image4: {
    width: 55,
    height: 55
  }
});
