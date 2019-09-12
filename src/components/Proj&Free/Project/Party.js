//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
class Party extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this._Peoples(
          require('../../../../assets/images/Project/Party/projectTeam01.png'),
          '고민우',
          '프로젝트 팀장',
          this._PressPerson,
        )}
        {this._Peoples(
          require('../../../../assets/images/Project/Party/projectTeam02.png'),
          '이민희',
          '영상 담당',
          this._PressPerson,
        )}
        {this._Peoples(
          require('../../../../assets/images/Project/Party/projectTeam03.png'),
          '서지은',
          '통계 자료담당',
          this._PressPerson,
        )}
      </View>
    );
  }

  _PressPerson = () => {
    this.props.navigation.navigate('FreelancerScreen');
  };

  _Peoples = (source, name, part, onPress) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ height: 100, width: 70, marginHorizontal: 10 }}>
        <Image source={source} style={{ height: 70, width: 70 }} />
        <Text style={{ textAlign: 'center' }}>{name}</Text>
        <Text style={{ fontSize: 8, textAlign: 'center' }}>{part}</Text>
      </TouchableOpacity>
    );
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
});

//make this component available to the app
export default Party;
