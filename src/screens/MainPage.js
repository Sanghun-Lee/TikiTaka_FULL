import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {Container, Content} from 'native-base';

import StatusBar from '../components/common/StatusBar';
import Advertise from '../components/common/SwiperFlatList';
import Category from '../components/MainPage/Category';
import TimeLine from '../components/MainPage/TimeLine';

import Header from '../components/MainPage/MainHeader';

class MainPage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      open: false,
    };
  }

  toggleOpen = () => {
    this.setState ({open: !this.state.open});
  };

  drawerContent = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#38C8EC',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          position: 'absolute',
        }}
      >
        <Text>Drawer</Text>
      </View>
    );
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{flex: 1}}>
          <MenuDrawer
            open={this.state.open}
            drawerPercentage={80}
            animationTime={250}
            opacity={0.4}
            drawerContent={this.drawerContent ()}
          >
            <Header />
            <ScrollView>
              <View style={{height: 170}}>
                <Advertise />
              </View>
              <View style={{height: 170, marginTop: 10, marginBottom: 10}}>
                <Category />
              </View>
              <Content>
                <TimeLine />
                <TimeLine />
              </Content>
            </ScrollView>
          </MenuDrawer>
        </View>
      </View>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
