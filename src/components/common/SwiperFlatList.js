//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import SwiperFlatList from 'react-native-swiper-flatlist';

// create a component

const child = [
  {
    source: require('../../../assets/images/MainPage/Advertise/Advertise1.png'),
    onPress: () => WebBrowser.openBrowserAsync('https://google.com'),
  },
  {
    source: require('../../../assets/images/MainPage/Advertise/Advertise2.png'),
    onPress: () => WebBrowser.openBrowserAsync('https://naver.com'),
  },
  {
    source: require('../../../assets/images/MainPage/Advertise/Advertise3.png'),
    onPress: () => WebBrowser.openBrowserAsync('https://daum.net'),
  },
];
const screenWidth = Math.round(Dimensions.get('window').width);

function webView(webPage) {
  WebBrowser.openBrowserAsync(webPage);
}

class Swiper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay={true}
          autoplayDelay={5}
          autoplayLoop={true}
          rednerAll={true}
          showPagination
          paginationStyleItem={{height: 10, width: 10}}
          paginationActiveColor="skyblue"
        >
          {child.map((child, index) => {
            return (
              <TouchableOpacity
                style={styles.AdvertiseSize}
                key={index}
                onPress={child.onPress}
              >
                <Image source={child.source} style={styles.AdvertiseSize} />
              </TouchableOpacity>
            );
          })}
        </SwiperFlatList>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 170,
    backgroundColor: 'white',
  },
  AdvertiseSize: {
    height: 170,
    width: screenWidth,
  },
});

//make this component available to the app
export default Swiper;
