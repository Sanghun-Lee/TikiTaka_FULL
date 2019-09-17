import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import StatusBar from '../../components/common/StatusBar';
import Header from '../../components/common/Header';
import Subtitle from '../../components/common/Subtitle';
import Button from '../../components/inputForm/TwoButton';
import TextBox from '../../components/inputForm/TextBox';

import { CheckBox } from 'react-native-elements';

export default class WriteMyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 'aaa@aaa.com',
      nickname: 'hun',
      intro: 'hello nice to meet you',
      grade: '4',
      organization: '영남대학교',
      categoryList: ['코딩', '디자인'],
      educationList: [
        {
          place: '경상고',
          grade: 3,
        },
        {
          place: '영남대학교',
          grade: 4,
        },
      ],
      lisenceList: [
        {
          lisence: '정보처리기사',
          getDate: '2019-08-01',
        },
      ],
      design: false,
      movie: false,
      translate: false,
      coding: false,
      music: false,
      engineer: false,
      study: false,
      etc: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Subtitle subtitle="이름 및 학년(나이)" />
          <TextBox
            text="닉네임"
            value={this.state.nickname}
            onChangeText={nickname => this.setState({ nickname })}
            buttonText="중복확인"
            buttonOnPress={this._overlapChecking}
          />
          <TextBox
            text="학년(나이)"
            value={this.state.grade}
            onChangeText={grade => this.setState({ grade })}
          />
          <Subtitle subtitle="한 줄 소개" />
          <TextInput
            multiline={true}
            autoCorrect={false}
            maxLength={140}
            numberOfLines={4}
            onChangeText={intro => this.setState({ intro })}
            value={this.state.intro}
            style={styles.introInput}
          />
          <TextBox
            text="조직"
            value={this.state.organization}
            onChangeText={organization => this.setState({ organization })}
          />
          <Subtitle subtitle="카테고리 선택" />
          <CheckBox
            center
            title="디자인"
            checked={this.state.design}
            onPress={() => {
              this.setState(prevState => {
                return { design: !prevState.design };
              });
            }}
          />
          <CheckBox
            center
            title="영상"
            checked={this.state.movie}
            onPress={() => {
              this.setState(prevState => {
                return { movie: !prevState.movie };
              });
            }}
          />
          <CheckBox
            center
            title="번역"
            checked={this.state.translate}
            onPress={() => {
              this.setState(prevState => {
                return { translate: !prevState.translate };
              });
            }}
          />
          <CheckBox
            center
            title="코딩"
            checked={this.state.coding}
            onPress={() => {
              this.setState(prevState => {
                return { coding: !prevState.coding };
              });
            }}
          />
          <CheckBox
            center
            title="음악"
            checked={this.state.music}
            onPress={() => {
              this.setState(prevState => {
                return { music: !prevState.music };
              });
            }}
          />
          <CheckBox
            center
            title="공학"
            checked={this.state.engineer}
            onPress={() => {
              this.setState(prevState => {
                return { engineer: !prevState.engineer };
              });
            }}
          />
          <CheckBox
            center
            title="스터디"
            checked={this.state.study}
            onPress={() => {
              this.setState(prevState => {
                return { study: !prevState.study };
              });
            }}
          />
          <CheckBox
            center
            title="기타"
            checked={this.state.etc}
            onPress={() => {
              this.setState(prevState => {
                return { etc: !prevState.etc };
              });
            }}
          />
          <Subtitle subtitle="학력" />
          <Subtitle subtitle="자격증" />
        </ScrollView>
      </View>
    );
  }
  _overlapChecking = () => {
    alert('중복 체크');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introInput: {
    borderBottomWidth: 1,
    height: 140,
  },
  second: {},
});
