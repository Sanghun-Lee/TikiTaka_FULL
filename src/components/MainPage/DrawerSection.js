import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default DrawerSection = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.icon}>
        <Ionicons name={props.iconName} size={44} color="#D2F4FF" />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.7,
    borderTopColor: 'white',
  },
  icon: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 15,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
