//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Stars from 'react-native-stars';

import PropTypes from 'prop-types';

// create a component
class PictureAndGrade extends Component {
  static propTypes = {
    ratingCount: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Image
            style={styles.ImageSize}
            source={require('../../../../assets/images/Freelancer/SideProfile01.png')}
          />
        </View>
        <View style={{ flex: 3 }}>
          <View style={styles.ratingText}>
            <Text>사용자 평점 총 {this.props.ratingCount}개의 평가</Text>
          </View>
          <View style={styles.star}>
            <Stars
              display={this.props.rating}
              spacing={8}
              count={5}
              starSize={32}
              fullStar={require('../../../../assets/images/Freelancer/full_star.png')}
              emptyStar={require('../../../../assets/images/Freelancer/empty_star.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    height: 80,
    width: 80,
  },
  ratingText: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 5,
  },
  star: {
    flex: 2,
    alignItems: 'flex-start',
    marginLeft: 5,
    marginTop: 10,
  },
});

//make this component available to the app
export default PictureAndGrade;
