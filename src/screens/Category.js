import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Dimensions} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

class Category extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          <TouchableOpacity style={{flex: 1}} onPress={this._PressProject}>
            <Image
              source={require('../../assets/images/Category/FindProject.png')}
              resizeMode={'cover'}
              style={styles.size}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}} onPress={this._PressFreelancer}>
            <Image
              source={require('../../assets/images/Category/FindProfile.png')}
              resizeMode={'cover'}
              style={styles.size}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _PressProject = () => {
    this.props.navigation.navigate('ProjectList');
  };
  _PressFreelancer = () => {
    this.props.navigation.navigate('FreelancerList');
  };
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  size: {
    width: screenWidth / 2 + 25,
    height: screenHeight,
  },
});
