//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Contents extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>총 인원 : 6명</Text>
        <Text>모집 인원 : 1명</Text>
        <Text>금액 : 20000원</Text>
        <Text>기간 : 19.06.27 ~ 19.08.12</Text>
        <Text>연락처 : 010-5215-5484</Text>
        <Text>
          세부 정보 : 현재 팀원으로 영상 제작에서 필요한 사운드를 담당해주실
          음악관련 전공자를 모집하고있습니다.
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 20,
    marginRight: 50,
  },
});

//make this component available to the app
export default Contents;
