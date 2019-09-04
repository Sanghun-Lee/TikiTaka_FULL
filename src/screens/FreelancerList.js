//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import FreelancerThumbnail from '../components/freelancer/FreelancerThumbnail';
import FilterButton from '../components/common/BottomButton';

const freelancerList = [
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require ('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
  },
];

// create a component
class FreelancerList extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <Subtitle subtitle="프리랜서" />
        <ScrollView>
          {freelancerList.map ((freelancerList, index) => {
            return (
              <FreelancerThumbnail
                major={freelancerList.major}
                collage={freelancerList.collage}
                grade={freelancerList.grade}
                rating={freelancerList.rating}
                evaluation={freelancerList.evaluation}
                imgSrc={freelancerList.imgSrc}
                key={index}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
        <FilterButton
          title="필터 적용"
          IconName="ios-options"
          onPress={() => alert ('button Pressed')}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FreelancerList;
