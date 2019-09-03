//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import FreelancerPicture from '../components/common/SwiperFlatList';
import Subtitle from '../components/common/Subtitle';
import PictureAndGrade from '../components/freelancer/PictureAndGrade';
import Contents from '../components/freelancer/Contents';

import Button from '../components/common/projFree/Button';
import Favorite from '../components/common/projFree/FavortieButton';

// create a component
class FreelancerScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <FreelancerPicture />
          <Subtitle subtitle="사용자 이름" />
          <View style={{height: 130}}>
            <PictureAndGrade />
          </View>
          <Subtitle subtitle="" />
          <View>
            <Contents />
          </View>
          <Subtitle subtitle="" />
          <View style={{height: 100, flexDirection: 'row'}}>
            <View style={[styles.center, {flex: 5}]}>
              <Button text="메시지 보내기" onPress={() => alert ('Message Button')} />
            </View>
            <View style={[styles.center, {flex: 1}]}>
              <Favorite />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default FreelancerScreen;
