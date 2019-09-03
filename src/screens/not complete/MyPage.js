//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class MyPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>1. 배경사진 넣기</Text>
        <Text>2. 사용자 사진 넣기</Text>
        <Text>3. 평점은 그대로 넣기</Text>
        <Text>4. 학년, 대학, 소속, 전공, 부전공, 복수전공, 연락처, 경력, 기타 입력하는 칸 만들기</Text>
        <Text>수정완료 버튼 넣기</Text>
        <Text>프로젝트 작성하기 버튼도 넣기</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MyPage;
