import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Content, Drawer } from 'native-base';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Advertise from '../components/common/SwiperFlatList';
import Category from '../components/MainPage/Category';
import TimeLine from '../components/MainPage/TimeLine';
import DrawerPage from '../components/MainPage/DrawerPage';

const TimeLineContents = [
  {
    writer: '이상훈',
    writeDate: '2015년 6월 16일',
    description: '님이 입대를 했습니다',
    thumbnail: require('../../assets/images/MainPage/TimeLine/daeguCircle01.png'),
    onPress: () => {
      alert('...');
    },
  },
  {
    writer: '이상훈',
    writeDate: '2017년 3월 15일',
    description: '님이 전역를 했습니다',
    thumbnail: require('../../assets/images/MainPage/TimeLine/daeguCircle01.png'),
    onPress: this._cardOnPress,
  },
  {
    writer: '타임라인',
    writeDate: '2019년 9월 12일',
    description:
      '은 아무리 길어도 두 줄이 넘어가지 않습니다. 내가 이렇게 많이 작성을 하고 또 오늘 추석이고 그리고 음 또 쓸 말이 없는데 아무튼 두 줄이 넘어가면 ... 이 나옵니다.',
    thumbnail: require('../../assets/images/MainPage/TimeLine/daeguCircle01.png'),
    onPress: this._cardOnPress,
  },
];

class MainPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{ flex: 1, zIndex: -1 }}>
          <Drawer
            ref={ref => {
              this.drawer = ref;
            }}
            content={<DrawerPage navigation={this.props.navigation} />}
            onClose={() => this.closeDrawer()}
          >
            <Header
              navigation={this.props.navigation}
              Left="ios-menu"
              LeftOnPress={this.openDrawer}
            />
            <ScrollView>
              <View style={{ height: 170 }}>
                <Advertise />
              </View>
              <View style={{ height: 170, marginTop: 10, marginBottom: 10 }}>
                <Category navigation={this.props.navigation} />
              </View>
              <Content>
                {TimeLineContents.map((timeline, index) => {
                  return (
                    <TimeLine
                      writer={timeline.writer}
                      writeDate={timeline.writeDate}
                      description={timeline.description}
                      thumbnail={timeline.thumbnail}
                      onPress={timeline.onPress}
                      key={index}
                    />
                  );
                })}
              </Content>
            </ScrollView>
          </Drawer>
        </View>
      </View>
    );
  }
  _cardOnPress = () => {
    alert('card pressed');
  };
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBar: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#38C8EC',
  },
  tikitakaText: {
    flex: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 16,
  },
});
