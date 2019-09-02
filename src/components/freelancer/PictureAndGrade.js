//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Stars from 'react-native-stars';
import {Ionicons} from '@expo/vector-icons';

// create a component
class PictureAndGrade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 80, width: 80}}
            source={require('../../../assets/images/Freelancer/SideProfile01.png')}
          />
        </View>
        <View style={{flex: 3}}>
          <View style={{flex: 1, justifyContent: 'flex-end', marginLeft: 5}}>
            <Text>사용자 평점 총 13개의 평가</Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-start',
              marginLeft: 5,
              marginTop: 10,
            }}
          >
            <Stars
              display={2.33}
              spacing={8}
              count={5}
              starSize={32}
              fullStar={require('../../../assets/images/Freelancer/full_star.png')}
              emptyStar={require('../../../assets/images/Freelancer/empty_star.png')}
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
});

//make this component available to the app
export default PictureAndGrade;
