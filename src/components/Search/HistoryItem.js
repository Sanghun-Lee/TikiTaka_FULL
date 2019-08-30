import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default class HistoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = { historyValue: props.text };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    deleteSearchHistory: PropTypes.func.isRequired
    // pressSearchHistory: PropTypes.func.isRequired,
  };

  render() {
    const { historyValue } = this.state;
    const { id, text, deleteSearchHistory } = this.props;

    return (
      <View style={styles.searchHistoryRow}>
        <TouchableOpacity
          style={styles.searchHistoryTextTouchable}
          onPress={this.pressSearchHistory}
        >
          <Text style={styles.searchHistoryText}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchHistoryDeleteTouchable}
          onPressOut={() => deleteSearchHistory(id)}
        >
          <Image
            source={require("../../../assets/images/Search/RecentSearchCancle.png")}
            style={styles.cancelImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
  pressSearchHistory = () => {
    console.log("해당 텍스트를 눌렀습니다.");
  };
  deleteSearchHistory = () => {
    console.log("삭제버튼을 눌렀습니다.");
  };
}

const styles = StyleSheet.create({
  searchHistoryRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 0.5,
    height: 38
  },
  searchHistoryTextTouchable: {
    flex: 6,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  searchHistoryText: {
    fontSize: 14,
    color: "#040505",
    marginLeft: 18
  },
  searchHistoryDeleteTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelImageStyle: {
    height: 15,
    width: 15
  }
});
