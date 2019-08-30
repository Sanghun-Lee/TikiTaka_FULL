import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class DrawerPage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    backOnPress: PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.backButtonPart}>
            <TouchableOpacity onPress={this.props.backOnPress}>
              <Image
                source={require("../../../../assets/images/Header/SideBack.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.personPicturePart}></View>
        </View>
      </View>
    );
  }
}

// function DrawerEachSection(image, text, size, onPress) {
//     return (
//         <TouchableOpacity style={styles.section} onPress={onPress}>
//             <View style={styles.picturePart}>
//                 <Image style={size} source={image} />
//             </View>
//             <View style={styles.textPart}>
//                 <Text style={{color : 'white', fontSize : 15}}>{text}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

const styles = StyleSheet.create({
  container: {
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
  },

  // 채팅방, 내 프로젝트, 내 동아리, 좋아요 목록이 오는 section들의 스타일
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
  }
});
