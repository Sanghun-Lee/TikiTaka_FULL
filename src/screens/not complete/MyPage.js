//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Statusbar from '../../components/common/StatusBar';
import Header from '../../components/common/Header';
import SettingItem from '../../components/Setting/SettingItem';

import NotFreelancer from '../../components/myPage/NotFreelancer';
import Freelancer from '../../components/myPage/Freelancer';

// create a component
class MyPage extends Component {
  constructor() {
    super();
    this.state = { freeFlag: false };
  }
  toggleFreeFlag = value => {
    this.setState({ freeFlag: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <Header navigation={this.props.navigation} />
        <SettingItem
          SettingContext="프리랜서 여부"
          toggleSwitchs={this.toggleFreeFlag}
          switchValues={this.state.freeFlag}
        />
        <Text>
          사진, 이름, 학년, 한 줄 소개, 전공 카테고리, 자격증, career, education, 완료한 프로젝트
          리스트
        </Text>
        {this.state.freeFlag ? <Freelancer /> : <NotFreelancer />}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyPage;
