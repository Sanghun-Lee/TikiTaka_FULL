import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Content, Drawer} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

import StatusBar from '../components/common/StatusBar';
import Advertise from '../components/common/SwiperFlatList';
import Category from '../components/MainPage/Category';
import TimeLine from '../components/MainPage/TimeLine';
import DrawerPage from '../components/MainPage/DrawerPage';

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
        <View style={{flex: 1, zIndex: -1}}>
          <Drawer
            ref={ref => {
              this.drawer = ref;
            }}
            content={<DrawerPage navigation={this.props.navigation} />}
            onClose={() => this.closeDrawer()}
          >
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.center} onPress={this.openDrawer}>
                <Ionicons name="ios-menu" size={28} color="white" />
              </TouchableOpacity>
              <Text style={styles.tikitakaText}>티키타카</Text>
              <TouchableOpacity
                style={styles.center}
                onPress={this._PressSearchButton}
              >
                <Ionicons name="ios-search" size={28} color="white" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{height: 170}}>
                <Advertise />
              </View>
              <View style={{height: 170, marginTop: 10, marginBottom: 10}}>
                <Category navigation={this.props.navigation} />
              </View>
              <Content>
                <TimeLine navigation={this.props.navigation} />
                <TimeLine navigation={this.props.navigation} />
              </Content>
            </ScrollView>
          </Drawer>
        </View>
      </View>
    );
  }
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
