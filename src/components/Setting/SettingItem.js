import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default SettingItem = props => {
  return (
    <View style={styles.SettingBar}>
      <Text style={styles.SettingText}>{props.SettingContext}</Text>
      <Switch
        style={styles.settingSwitch}
        onValueChange={props.toggleSwitchs}
        value={props.switchValues}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SettingBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "#999999",
    borderBottomWidth: 0.5,
    height: 54
  },
  SettingText: {
    flex: 5,
    color: "#040505",
    fontSize: 18,
    marginLeft: 20,
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  settingSwitch: {
    marginRight: 26
  }
});
