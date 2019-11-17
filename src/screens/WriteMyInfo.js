import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import Subtitle from "../components/common/Subtitle";
import TwoButton from "../components/inputForm/TwoButton";
import TextBox from "../components/inputForm/TextBox";

import CategoryButton from "../components/Proj&Free/common/Category";
import SettingItem from "../components/Setting/SettingItem";

export default class WriteMyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "이상훈",
      nickname: "hun",
      location: "대구",
      organization: "영남대학교",
      ////////////////////////////////////
      freeflag: 0,
      intro: "hello nice to meet you",
      grade: "4",
      category: [],
      lisenceList: ["정보처리기사", "6시그마"],
      educationList: [
        {
          getDate: "2011-03-01",
          things: "경상고등학교"
        },
        {
          getDate: "2014-03-02",
          things: "영남대학교"
        }
      ],
      careerList: [
        {
          getDate: "2017-08-01",
          things: "맥도날드 알바"
        }
      ],
      design: false,
      movie: false,
      translate: false,
      coding: false,
      music: false,
      engineer: false,
      study: false,
      etc: false,

      eduDate_0: "",
      eduThings_0: "",
      eduDate_1: "",
      eduThings_1: "",
      eduDate_2: "",
      eduThings_2: "",

      carDate_0: "",
      carThings_0: "",
      carDate_1: "",
      carThings_1: "",
      carDate_2: "",
      carThings_2: ""
    };
  }

  // getData() {
  //   this.state.educationList.map(edu => {
  //     eduGetDate.concat(edu.getDate);
  //     eduThings.concat(edu.things);
  //   });

  //   this.state.careerList.map(career => {
  //     careerGetDate.concat(career.getDate);
  //     careerThings.concat(career.things);
  //   });

  //   console.log(`eduGetDate : ${this.state.eduGetDate}
  //   eduThings : ${eduThings}
  //   careerGetDate : ${careerGetDate}
  //   careerThings : ${careerThings}`);
  // }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="회원정보 수정" />
        <ScrollView>
          <Subtitle subtitle="기본정보 수정" />
          <TextBox
            text="이름"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
          <TextBox
            text="닉네임"
            value={this.state.nickname}
            onChangeText={nickname => this.setState({ nickname })}
          />
          <TextBox
            text="조직"
            value={this.state.organization}
            onChangeText={organization => this.setState({ organization })}
          />
          <TextBox
            text="지역"
            value={this.state.location}
            onChangeText={location => this.setState({ location })}
          />
          <SettingItem
            SettingContext="프리랜서 여부"
            switchValues={this.state.freeflag}
            toggleSwitchs={this._toggleSwitch}
          />
          {!this.state.freeflag ? (
            <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
              프리랜서로 등록해 보세요
            </Text>
          ) : (
            <View style={{ flex: 1 }}>
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
              <Subtitle subtitle="카테고리 선택" />
              <View style={styles.categoryView}>
                <View style={{ flex: 1, flexDirection: "row" }}>
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
                <View style={{ flex: 1, flexDirection: "row" }}>
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
              <TextBox
                text="학년(나이)"
                value={this.state.grade}
                onChangeText={grade => this.setState({ grade })}
              />
              <TextBox
                text="학교"
                value={this.state.eduThings_0}
                onChangeText={text => this.setState({ eduThings_0: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.eduDate_0}
                onChangeText={text => this.setState({ eduDate_0: text })}
              />
              <TextBox
                text="학교"
                value={this.state.eduThings_1}
                onChangeText={text => this.setState({ eduThings_1: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.eduDate_1}
                onChangeText={text => this.setState({ eduDate_1: text })}
              />
              <TextBox
                text="학교"
                value={this.state.eduThings_2}
                onChangeText={text => this.setState({ eduThings_2: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.eduDate_2}
                onChangeText={text => this.setState({ eduDate_2: text })}
              />
              <Subtitle subtitle="자격증" />
              <TextBox
                text="자격증1"
                value={this.state.lisenceList[0]}
                onChangeText={text => this._updateLisenceList(text, 0)}
              />
              <TextBox
                text="자격증2"
                value={this.state.lisenceList[1]}
                onChangeText={text => this._updateLisenceList(text, 1)}
              />
              <TextBox
                text="자격증3"
                value={this.state.lisenceList[2]}
                onChangeText={text => this._updateLisenceList(text, 2)}
              />
              <Subtitle subtitle="경력" />
              <TextBox
                text="경력"
                value={this.state.carThings_0}
                onChangeText={text => this.setState({ carThings_0: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.carDate_0}
                onChangeText={text => this.setState({ carDate_0: text })}
              />
              <TextBox
                text="경력"
                value={this.state.carThings_1}
                onChangeText={text => this.setState({ carThings_1: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.carDate_1}
                onChangeText={text => this.setState({ carDate_1: text })}
              />
              <TextBox
                text="경력"
                value={this.state.carThings_2}
                onChangeText={text => this.setState({ carThings_2: text })}
              />
              <TextBox
                text="날짜"
                value={this.state.carDate_2}
                onChangeText={text => this.setState({ carDate_2: text })}
              />
            </View>
          )}
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
    this.props.navigation.goBack();
  };

  _toggleSwitch = async value => {
    this.setState({ freeflag: value });
    if (this.state.educationList[0] !== undefined) {
      this.setState({ eduDate_0: this.state.educationList[0].getDate });
      this.setState({ eduThings_0: this.state.educationList[0].things });
    }
    if (this.state.educationList[1] !== undefined) {
      this.setState({ eduDate_1: this.state.educationList[1].getDate });
      this.setState({ eduThings_1: this.state.educationList[1].things });
    }
    if (this.state.educationList[2] !== undefined) {
      this.setState({ eduDate_2: this.state.educationList[2].getDate });
      this.setState({ eduThings_2: this.state.educationList[2].things });
    }

    if (this.state.careerList[0] !== undefined) {
      this.setState({ carDate_0: this.state.careerList[0].getDate });
      this.setState({ carThings_0: this.state.careerList[0].things });
    }
    if (this.state.careerList[1] !== undefined) {
      this.setState({ carDate_0: this.state.careerList[1].getDate });
      this.setState({ carThings_0: this.state.careerList[1].things });
    }
    if (this.state.careerList[2] !== undefined) {
      this.setState({ carDate_0: this.state.careerList[2].getDate });
      this.setState({ carThings_0: this.state.careerList[2].things });
    }
  };

  _CreateButton = () => {
    if (this.state.eduDate_0 !== "") {
      let newArray = [...this.state.educationList];
      newArray[0].getDate = this.state.eduDate_0;
      newArray[0].things = this.state.eduThings_0;
      this.setState({ educationList: newArray });
    }
    if (this.state.eduDate_1 !== "") {
      let newArray = [...this.state.educationList];
      newArray[1].getDate = this.state.eduDate_1;
      newArray[1].things = this.state.eduThings_1;
      this.setState({ educationList: newArray });
    }
    if (this.state.eduDate_2 !== "") {
      let newArray = [...this.state.educationList];
      let tmp = {
        getDate: this.state.eduDate_2,
        things: this.state.eduThings_0
      };
      newArray[2] = tmp;
      this.setState({ educationList: newArray });
    }
    if (this.state.carDate_0 !== "") {
      let newArray = [...this.state.educationList];
      newArray[0].getDate = this.state.carDate_0;
      newArray[0].things = this.state.carThings_0;
      this.setState({ educationList: newArray });
    }
    if (this.state.carDate_1 !== "") {
      let newArray = [...this.state.educationList];
      newArray[1].getDate = this.state.carDate_1;
      newArray[1].things = this.state.carThings_1;
      this.setState({ educationList: newArray });
    }
    if (this.state.carDate_2 !== "") {
      let newArray = [...this.state.educationList];
      newArray[2].getDate = this.state.carDate_2;
      newArray[2].things = this.state.carThings_2;
      this.setState({ educationList: newArray });
    }
    alert("작성완료");
    console.log(this.state.educationList);
  };

  _updateLisenceList = (text, index) => {
    let newArray = [...this.state.lisenceList];
    newArray[index] = text;
    this.setState({ lisenceList: newArray });
  };

  ////////////////////////////////////////////////////
  _DesignButton = async () => {
    await this.setState(prevState => {
      return { design: !prevState.design };
    });
    this.setState({
      category: this.state.design
        ? this.state.category.concat("디자인")
        : this.state.category.filter(category => category !== "디자인")
    });
  };

  _MovieButton = async () => {
    await this.setState(prevState => {
      return { movie: !prevState.movie };
    });
    this.setState({
      category: this.state.movie
        ? this.state.category.concat("영상")
        : this.state.category.filter(category => category !== "영상")
    });
  };

  _TranslateButton = async () => {
    await this.setState(prevState => {
      return { translate: !prevState.translate };
    });
    this.setState({
      category: this.state.translate
        ? this.state.category.concat("번역")
        : this.state.category.filter(category => category !== "번역")
    });
  };

  _CodingButton = async () => {
    await this.setState(prevState => {
      return { coding: !prevState.coding };
    });
    this.setState({
      category: this.state.coding
        ? this.state.category.concat("코딩")
        : this.state.category.filter(category => category !== "코딩")
    });
  };

  _MusicButton = async () => {
    await this.setState(prevState => {
      return { music: !prevState.music };
    });
    this.setState({
      category: this.state.music
        ? this.state.category.concat("음악")
        : this.state.category.filter(category => category !== "음악")
    });
  };

  _EngineerButton = async () => {
    await this.setState(prevState => {
      return { engineer: !prevState.engineer };
    });
    this.setState({
      category: this.state.engineer
        ? this.state.category.concat("공학")
        : this.state.category.filter(category => category !== "공학")
    });
  };

  _StudyButton = async () => {
    await this.setState(prevState => {
      return { study: !prevState.study };
    });
    this.setState({
      category: this.state.study
        ? this.state.category.concat("스터디")
        : this.state.category.filter(category => category !== "스터디")
    });
  };

  _EtcButton = async () => {
    await this.setState(prevState => {
      return { etc: !prevState.etc };
    });
    this.setState({
      category: this.state.etc
        ? this.state.category.concat("기타")
        : this.state.category.filter(category => category !== "기타")
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  introInput: {
    borderBottomWidth: 1,
    height: 140,
    margin: 10
  },
  second: {},
  categoryView: {
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 70,
    borderTopWidth: 0.3
  }
});
