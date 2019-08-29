import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class Header extends Component {
  constructor (props) {
    super (props);
    this.state = {
      open: false,
    };
  }

  toggleOpen = () => {
    this.setState ({open: !this.state.open});
  };

  _eachSection = (image, text, size) => {
    // TODO onPress도 입력으로 받아서 TouchableOpacity에 onPress를 그대로 넘겨주자
    return (
      <TouchableOpacity style={styles.section}>
        <View style={styles.picturePart}>
          <Image style={size} source={image} />
        </View>
        <View style={styles.textPart}>
          <Text style={{color: 'white', fontSize: 15}}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        {/* 뒤로가기버튼과 프로필 사진이 나오는 부분 */}
        <View style={styles.topSection}>
          <View style={styles.backButtonPart}>
            <TouchableOpacity onPress={this.toggleOpen}>
              <Image
                source={require ('../assets/images/SideBack.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.personPicturePart}>
            <TouchableOpacity style={{marginTop: 5}}>
              <Image
                style={{width: 85, height: 85}}
                source={require ('../assets/images/Subpage/SideProfile01.png')}
              />
              <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
                고민우
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* 채팅방, 내 프로젝트, 동아리, 좋아요 목록 이 4 파트 */}
        {this._eachSection (
          require ('../assets/images/Subpage/SubMessage.png'),
          '채팅방',
          {width: 53, height: 50}
        )}
        {this._eachSection (
          require ('../assets/images/Subpage/SubMyProject.png'),
          '내 프로젝트',
          {width: 49.12, height: 50}
        )}
        {this._eachSection (
          require ('../assets/images/Subpage/SubMyCircle.png'),
          '내 동아리',
          {width: 51, height: 35.75}
        )}
        {this._eachSection (
          require ('../assets/images/Subpage/SubMyLike.png'),
          '좋아요 목록',
          {width: 51, height: 37.7}
        )}
        {/* 설정버튼과 로그아웃버튼이 존재하는 곳 */}
        <View style={styles.bottomSection}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                marginTop: 25,
                alignItems: 'flex-start',
                marginLeft: 15,
              }}
              onPress={() => {
                this.props.navigation.naviagte ('Setting');
              }}
            >
              <Image
                source={require ('../assets/images/Subpage/SubSetting.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                marginTop: 25,
                alignItems: 'flex-end',
                marginRight: 15,
              }}
            >
              <Image
                source={require ('../assets/images/Subpage/SubLogout.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render () {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open} // {이 안이 true이면 drawer가 나온다}
          drawerContent={this.drawerContent ()} // 출력될 Drawer의 내용을 호출
          drawerPercentage={80} // Drawer이 나오는 사이즈 조절
          animationTime={250}
          overlay={true}
          opacity={0.4}
        />
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={() => {
            this.toggleOpen;
          }}
        >
          <Image
            source={require ('../../../assets/images/MainPage/TitleBarSubPage.png')}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>티키타카</Text>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={() => {
            this.props.navigation.navigate ('SearchScreen');
          }}
        >
          <Image
            source={require ('../../../assets/images/TitleBarSearch.png')}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

_handleSearchButton = () => {
  this.props.navigation.navigate ('Search');
};
_handlePressBackButton = () => {
  this.props.navigation.navigate (this.props.postScreen);
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#35CBEE',
    flexDirection: 'row',
    height: 43.26,
  },
  backTextStyle: {
    fontSize: 13,
    color: 'white',
    alignItems: 'center',
  },
  headerText: {
    flex: 6,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  searchIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 13,
  },
  searchIconImage: {
    height: 20,
    width: 20,
  },
});
