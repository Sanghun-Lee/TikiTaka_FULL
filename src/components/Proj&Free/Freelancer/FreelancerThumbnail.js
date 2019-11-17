import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

// 이미지는 어떻게 받아야 되는거지
export default class FreelancerThumbnail extends Component {
  static propTypes = {
    lisence: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    intro: PropTypes.string.isRequired
  };
  state = {
    isFavorite: false
  };

  render() {
    const { isFavorite } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.container, { flex: 8 }]}
          onPress={this._pressFreelancer}
        >
          <View style={styles.ImageView}>
            <Image
              source={require("../../../../assets/images/Rayon.png")}
              style={styles.ImageStyle}
            />
          </View>
          <View style={{ flex: 2, flexDirection: "column" }}>
            <View style={{ flex: 2, justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {this.props.organization} / 학년 : {this.props.grade}
              </Text>
            </View>

            <View style={{ flex: 3 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ fontSize: 12 }}>
                  자격증 : {this.props.lisence}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1}>{this.props.intro}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.favoriteView}>
          <TouchableOpacity
            style={styles.favoriteOpacity}
            onPress={this._handlePressFavorite}
          >
            {isFavorite ? (
              <Image
                source={require("../../../../assets/images/Freelancer/FreelancerThumbnail/LikeEnable.png")}
                style={styles.favoriteImage}
              />
            ) : (
              <Image
                source={require("../../../../assets/images/Freelancer/FreelancerThumbnail/LikeDisable.png")}
                style={styles.favoriteImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _pressFreelancer = () => {
    // this.props.navigation.navigate('FreelancerScreen');
    this.props.navigation.navigate("FreelancerScreen");
  };
  _handlePressFavorite = () => {
    this.setState(prevState => {
      return {
        isFavorite: !prevState.isFavorite
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 92,
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1
  },
  ImageView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ImageStyle: {
    width: 64.57,
    height: 64.57
  },

  favoriteView: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    flex: 1,
    height: 92
  },
  favoriteOpacity: {
    marginLeft: 5,
    marginTop: 60,
    width: 20,
    height: 20
  },
  favoriteImage: {
    width: 17.7,
    height: 16.09
  }
});
