import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import TwoButton from '../components/inputForm/TwoButton';
import TextBox from '../components/inputForm/TextBox';

import CategoryButton from '../components/Proj&Free/common/Category';

export default class WriteMyInfo extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userId: 'aaa@aaa.com',
      nickname: 'hun',
      intro: 'hello nice to meet you',
      grade: '4',
      organization: '영남대학교',
      category: [],
      educationList: ['경상고', '영남대'],
      lisenceList: ['정보처리기사', '6시그마'],
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

  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <Subtitle subtitle="이름 및 학년(나이)" />
          <TextBox
            text="닉네임"
            value={this.state.nickname}
            onChangeText={nickname => this.setState ({nickname})}
            buttonText="중복확인"
            buttonOnPress={this._overlapChecking}
          />
          <TextBox
            text="학년(나이)"
            value={this.state.grade}
            onChangeText={grade => this.setState ({grade})}
          />
          <TextBox
            text="조직"
            value={this.state.organization}
            onChangeText={organization => this.setState ({organization})}
          />
          <Subtitle subtitle="한 줄 소개" />
          <TextInput
            multiline={true}
            autoCorrect={false}
            maxLength={140}
            numberOfLines={4}
            onChangeText={intro => this.setState ({intro})}
            value={this.state.intro}
            style={styles.introInput}
          />
          <Subtitle subtitle="카테고리 선택" />
          <View style={styles.categoryView}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <CategoryButton
                text="디자인"
                value={this.state.design}
                onPress={this._DesignButton}
                iconName="md-brush"
              />
              <CategoryButton
                text="영상"
                value={this.state.movie}
                onPress={this._MovieButton}
                iconName="logo-youtube"
              />
              <CategoryButton
                text="번역"
                value={this.state.translate}
                onPress={this._TranslateButton}
                iconName="logo-google"
              />
              <CategoryButton
                text="코딩"
                value={this.state.coding}
                onPress={this._CodingButton}
                iconName="logo-python"
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <CategoryButton
                text="음악"
                value={this.state.music}
                onPress={this._MusicButton}
                iconName="ios-musical-notes"
              />
              <CategoryButton
                text="공학"
                value={this.state.engineer}
                onPress={this._EngineerButton}
                iconName="ios-cog"
              />
              <CategoryButton
                text="스터디"
                value={this.state.study}
                onPress={this._StudyButton}
                iconName="ios-book"
              />
              <CategoryButton
                text="기타"
                value={this.state.etc}
                onPress={this._EtcButton}
                iconName="ios-more"
              />
            </View>
          </View>
          <Subtitle subtitle="학력" />
          <View style={styles.textInput}>
            <TextBox
              text="학교"
              value={this.state.educationList[0]}
              onChangeText={text => this._updateEduList (text, 0)}
            />
          </View>
          <View style={styles.textInput}>
            <TextBox
              text="학교"
              value={this.state.educationList[1]}
              onChangeText={text => this._updateEduList (text, 1)}
            />
          </View>
          <View style={styles.textInput}>
            <TextBox
              text="학교"
              value={this.state.educationList[2]}
              onChangeText={text => this._updateEduList (text, 2)}
            />
          </View>

          <Subtitle subtitle="자격증" />
          <View style={styles.textInput}>
            <TextBox
              text="자격증"
              value={this.state.lisenceList[0]}
              onChangeText={text => this._updateLisenceList (text, 0)}
            />
          </View>
          <View style={styles.textInput}>
            <TextBox
              text="자격증"
              value={this.state.lisenceList[1]}
              onChangeText={text => this._updateLisenceList (text, 1)}
            />
          </View>
          <View style={styles.textInput}>
            <TextBox
              text="자격증"
              value={this.state.lisenceList[2]}
              onChangeText={text => this._updateLisenceList (text, 2)}
            />
          </View>
          <TwoButton
            Left="작성완료"
            LeftOnPress={this._CreateButton}
            Right="취소"
            RightOnPress={this._pressBackButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  _overlapChecking = () => {
    alert ('중복 체크');
  };

  _pressBackButton = () => {
    this.props.navigation.goBack ();
  };

  _CreateButton = async () => {
    console.log ('작성 완료');
    alert (`userID : ${this.state.userId}\n
    nickname : ${this.state.nickname}\n
    educationList : ${this.state.educationList}\n
    lisenceList : ${this.state.lisenceList}\n
    category : ${this.state.category}`);
  };

  _updateEduList = (text, index) => {
    let newArray = [...this.state.educationList];
    newArray[index] = text;
    this.setState ({educationList: newArray});
  };

  _updateLisenceList = (text, index) => {
    let newArray = [...this.state.lisenceList];
    newArray[index] = text;
    this.setState ({lisenceList: newArray});
  };

  _DesignButton = async () => {
    await this.setState (prevState => {
      return {design: !prevState.design};
    });
    this.setState ({
      category: this.state.design
        ? this.state.category.concat ('디자인')
        : this.state.category.filter (category => category !== '디자인'),
    });
  };

  _MovieButton = async () => {
    await this.setState (prevState => {
      return {movie: !prevState.movie};
    });
    this.setState ({
      category: this.state.movie
        ? this.state.category.concat ('영상')
        : this.state.category.filter (category => category !== '영상'),
    });
  };

  _TranslateButton = async () => {
    await this.setState (prevState => {
      return {translate: !prevState.translate};
    });
    this.setState ({
      category: this.state.translate
        ? this.state.category.concat ('번역')
        : this.state.category.filter (category => category !== '번역'),
    });
  };

  _CodingButton = async () => {
    await this.setState (prevState => {
      return {coding: !prevState.coding};
    });
    this.setState ({
      category: this.state.coding
        ? this.state.category.concat ('코딩')
        : this.state.category.filter (category => category !== '코딩'),
    });
  };

  _MusicButton = async () => {
    await this.setState (prevState => {
      return {music: !prevState.music};
    });
    this.setState ({
      category: this.state.music
        ? this.state.category.concat ('음악')
        : this.state.category.filter (category => category !== '음악'),
    });
  };

  _EngineerButton = async () => {
    await this.setState (prevState => {
      return {engineer: !prevState.engineer};
    });
    this.setState ({
      category: this.state.engineer
        ? this.state.category.concat ('공학')
        : this.state.category.filter (category => category !== '공학'),
    });
  };

  _StudyButton = async () => {
    await this.setState (prevState => {
      return {study: !prevState.study};
    });
    this.setState ({
      category: this.state.study
        ? this.state.category.concat ('스터디')
        : this.state.category.filter (category => category !== '스터디'),
    });
  };

  _EtcButton = async () => {
    await this.setState (prevState => {
      return {etc: !prevState.etc};
    });
    this.setState ({
      category: this.state.etc
        ? this.state.category.concat ('기타')
        : this.state.category.filter (category => category !== '기타'),
    });
  };
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  introInput: {
    borderBottomWidth: 1,
    height: 140,
    margin: 10,
  },
  second: {},
  categoryView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 70,
    borderBottomWidth: 0.3,
  },
});
