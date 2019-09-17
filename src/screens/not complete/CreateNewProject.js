//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import StatusBar from '../../components/common/StatusBar';
import Header from '../../components/common/Header';
import Subtitle from '../../components/common/Subtitle';
import TextBox from '../../components/inputForm/TextBox';
import TwoButton from '../../components/inputForm/TwoButton';

import { CheckBox } from 'react-native-elements';

// create a component
class CreateNewProject extends Component {
  constructor(props) {
    super(props);
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
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header centerText="새 프로젝트 생성" navigation={this.props.navigation} />
        <ScrollView>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <View style={{ marginTop: 10, marginHorizontal: 20 }}>
            <TextBox
              text="제목"
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
            />
            <TextBox
              text="가격"
              value={this.state.price}
              onChangeText={price => this.setState({ price })}
              placeholder="ex) 20000 / 단위 : (원)"
            />
            <TextBox
              text="기간"
              value={this.state.period}
              onChangeText={period => this.setState({ period })}
              placeholder="ex) 15 / 단위 : (일)"
            />
            <View style={{ alignItems: 'center', height: 50 }}>
              <TouchableOpacity onPress={this._CalendarOnPress} style={styles.calendarButton}>
                <Text>모집 기간</Text>
              </TouchableOpacity>
            </View>
            <Text>카테고리 선택</Text>
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
            <TextBox
              text="총 인원"
              value={this.state.maxPeople}
              onChangeText={maxPeople => this.setState({ maxPeople })}
            />
            <Text>프리랜서 리스트</Text>
            <Text>설명</Text>
            <TextInput
              placeholder="프로젝트에 대한 설명"
              multiline={true}
              autoCorrect={false}
              maxLength={140}
              numberOfLines={4}
              onChangeText={description => this.setState({ description })}
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
      </View>
    );
  }
  _CalendarOnPress = () => {
    this.props.navigation.navigate('Calendar');
  };
  _pressBackButton = () => {
    this.props.navigation.goBack();
  };
  _CreateButton = () => {
    alert('작성 완료');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionInput: {
    borderBottomWidth: 1,
    height: 140,
  },
  buttonStyle: {
    height: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarButton: {
    width: 80,
    height: 30,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default CreateNewProject;
