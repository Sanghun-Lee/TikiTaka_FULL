//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'native-base';

import StatusBar from '../../components/common/StatusBar';
import Header from '../../components/common/Header';
import Subtitle from '../../components/common/Subtitle';
import TextBox from '../../components/login/SignUp/TextBox';

// create a component
class CreateNewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header centerText="새 프로젝트 생성" navigation={this.props.navigation} />
        <ScrollView>
          <View style={{ height: 130, backgroundColor: 'grey' }}>
            <Text>사진 넣기</Text>
          </View>
          <Subtitle subtitle="프로젝트 참여인원" />
          <View style={{ height: 160, backgroundColor: 'skyblue' }}>
            <Text>등장인물 넣기</Text>
          </View>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <View style={{ marginTop: 40, marginHorizontal: 20 }}>
            <TextBox text="제목" />
            <TextBox text="가격" />
            <TextBox text="기간" />
            <TextBox text="모집기한(calander)" />
            <TextBox text="카테고리 선택(selector)" />
            <TextBox text="모집 인원" />
            <TextBox text="프로젝트 총 인원" />
            <TextBox text="카테고리 선택(selector)" />
            <View style={styles.buttonViewStyle}>
              <Button rounded info style={styles.buttonStyle} onPress={() => alert('글 작성버튼')}>
                <Text style={{ color: 'white' }}>글 작성하기</Text>
              </Button>
              <Button rounded info style={styles.buttonStyle} onPress={this.cancel}>
                <Text style={{ color: 'white' }}>취소</Text>
              </Button>
            </View>
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
  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default CreateNewProject;
