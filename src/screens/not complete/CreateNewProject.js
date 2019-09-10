//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../../components/common/StatusBar';
import Header from '../../components/FavoriteList/Header';
import Subtitle from '../../components/common/Subtitle';
import TextBox from '../../components/login/SignUp/TextBox';

// create a component
class CreateNewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header title="새 프로젝트 생성" navigation={this.props.navigation} />
        <ScrollView>
          <View style={{height: 130, backgroundColor: 'grey'}}>
            <Text>사진 넣기</Text>
          </View>
          <Subtitle subtitle="프로젝트 참여인원" />
          <View style={{height: 160, backgroundColor: 'skyblue'}}>
            <Text>등장인물 넣기</Text>
          </View>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <View style={{marginTop: 40, marginHorizontal: 20}}>
            <TextBox text="제목" />
            <Text>1. 제목</Text>
            <Text>2. 가격</Text>
            <Text>3. 기간</Text>
            <Text>4. 모집 기한</Text>
            <Text>5. 상세 설명</Text>
            <Text>6. 카테고리 선택</Text>
            <Text>7. 모집 인원</Text>
          </View>
        </ScrollView>
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
export default CreateNewProject;
