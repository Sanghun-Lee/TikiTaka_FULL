//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Statusbar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import SettingItem from '../components/Setting/SettingItem';

import NotFreelancer from '../components/myPage/NotFreelancer';
import Freelancer from '../components/myPage/Freelancer';

// create a component
class MyPage extends Component {
  constructor () {
    super ();
    this.state = {freeFlag: false};
  }
  toggleFreeFlag = value => {
    this.setState ({freeFlag: value});
  };

  render () {
    return (
      <View style={styles.container}>
        <Statusbar />
        {this.state.freeFlag
          ? <Header
              navigation={this.props.navigation}
              Right="ios-create"
              RightOnPress={this._PressMyInfo}
            />
          : <Header navigation={this.props.navigation} />}

        <SettingItem
          SettingContext="프리랜서 여부"
          toggleSwitchs={this.toggleFreeFlag}
          switchValues={this.state.freeFlag}
        />
        {this.state.freeFlag ? <Freelancer /> : <NotFreelancer />}
      </View>
    );
  }
  _PressMyInfo = () => {
    this.props.navigation.navigate ('WriteMyInfo');
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyPage;
