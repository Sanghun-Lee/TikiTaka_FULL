//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import TextBox from '../components/inputForm/TextBox';
import TwoButton from '../components/inputForm/TwoButton';

import CategoryButton from '../components/Proj&Free/common/Category';

import ListView from 'deprecated-react-native-listview';
import CalendarPicker from 'react-native-calendar-picker';

// create a component
class CreateNewProject extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      price: '',
      period: '',
      dueDate: '',
      description: '',
      category: [],
      maxPeople: '',
      freeList: [],
      design: false,
      movie: false,
      translate: false,
      coding: false,
      music: false,
      engineer: false,
      study: false,
      etc: false,

      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind (this);
  }

  onDateChange (date) {
    this.setState ({
      selectedStartDate: date,
      dueDate: date.toString (),
    });
  }

  render () {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString () : '';

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <Header centerText="새 프로젝트 생성" navigation={this.props.navigation} />
        <ScrollView>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <View style={{marginTop: 10}}>
            <TextBox
              text="제목"
              value={this.state.title}
              onChangeText={title => this.setState ({title})}
            />
            <TextBox
              text="가격"
              value={this.state.price}
              onChangeText={price => this.setState ({price})}
              placeholder="ex) 20000 / 단위 : (원)"
            />
            <TextBox
              text="기간"
              value={this.state.period}
              onChangeText={period => this.setState ({period})}
              placeholder="ex) 15 / 단위 : (일)"
            />
            <TextBox
              text="총 인원"
              value={this.state.maxPeople}
              onChangeText={maxPeople => this.setState ({maxPeople})}
            />
            <Subtitle subtitle="모집 기간" />
            <View>
              <CalendarPicker onDateChange={this.onDateChange} />
              <View style={{margin: 10}}>
                <Text>SELECTED DATE:{startDate}</Text>
              </View>
            </View>

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
            <Subtitle subtitle="프리랜서 리스트" />
            <Text style={{margin: 15}}>
              글 작성 후 프리랜서에게서 신청이 들어오면 추가됩니다.
            </Text>
            <Subtitle subtitle="상세설명" />
            <TextInput
              placeholder="프로젝트에 대한 설명"
              multiline={true}
              autoCorrect={false}
              maxLength={140}
              numberOfLines={4}
              onChangeText={description => this.setState ({description})}
              value={this.state.description}
              style={styles.descriptionInput}
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
  _pressBackButton = () => {
    this.props.navigation.goBack ();
  };
  _CreateButton = () => {
    alert (
      '제목 : ' +
        this.state.title +
        '\n' +
        '가격 : ' +
        this.state.price +
        '\n' +
        '기간 : ' +
        this.state.period +
        '\n' +
        '총 인원 : ' +
        this.state.maxPeople +
        '\n' +
        '모집기간 : ' +
        this.state.dueDate +
        '\n' +
        '카테고리 : ' +
        this.state.category +
        '\n' +
        '설명 : ' +
        this.state.description +
        '\n'
    );
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

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  descriptionInput: {
    borderBottomWidth: 1,
    height: 140,
    margin: 10,
  },
  buttonStyle: {
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default CreateNewProject;
