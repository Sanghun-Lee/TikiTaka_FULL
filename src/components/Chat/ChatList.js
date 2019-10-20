//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// create a component
class MyClass extends Component {
  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={{flex: 1}}>
          <Image
            source={require ('../../../assets/images/Rayon.png')}
            style={{height: 50, width: 50, marginLeft: 10}}
          />
        </View>
        <View style={{flex: 3, flexDirection: 'column'}}>
          <Text style={styles.roomTitle}>{this.props.chatRoomTitle}</Text>
          <Text style={styles.text}>{this.props.userList[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  roomTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  text: {
    fontSize: 15,
    marginLeft: 15,
  },
});

//make this component available to the app
export default MyClass;
