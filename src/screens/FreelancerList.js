//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import FreelancerThumbnail from '../components/Proj&Free/Freelancer/FreelancerThumbnail';
import FilterButton from '../components/Proj&Free/common/FilterButton';

const freelancerList = [
  {
    major: '산업디자인',
    organization: '영남대학교',
    grade: 3,
    intro: '저는 영남대학교의 산업 디자인과에 다니고 있습니다.',
  },
];

// create a component
class FreelancerList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프리랜서 리스트"
          Right="ios-search"
          RightOnPress={this._PressSearchIcon}
        />
        <Subtitle subtitle="프리랜서" />
        <ScrollView>
          {freelancerList.map((freelancerList, index) => {
            return (
              <FreelancerThumbnail
                major={freelancerList.major}
                organization={freelancerList.organization}
                grade={freelancerList.grade}
                intro={freelancerList.intro}
                key={index}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
        <FilterButton
          title="필터 적용"
          IconName="ios-options"
          onPress={() => alert('button Pressed')}
        />
      </View>
    );
  }
  _PressSearchIcon = () => {
    this.props.navigation.navigate('Search');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FreelancerList;
