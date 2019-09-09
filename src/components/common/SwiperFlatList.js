//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {Dimensions} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

// create a component

const child = [
  {
    source: require ('../../../assets/images/MainPage/Advertise/Advertise1.png'),
    onPress: () => Alert.alert ('Advertise1 Press'),
  },
  {
    source: require ('../../../assets/images/MainPage/Advertise/Advertise2.png'),
    onPress: () => Alert.alert ('Advertise2 Press'),
  },
  {
    source: require ('../../../assets/images/MainPage/Advertise/Advertise3.png'),
    onPress: () => Alert.alert ('Advertise3 Press'),
  },
];
const screenWidth = Math.round (Dimensions.get ('window').width);
class Swiper extends Component {
  render () {
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
          {child.map ((child, index) => {
            return (
              <TouchableOpacity
                style={styles.AdvertiseSize}
                onPress={child.onPress}
                key={index}
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
const styles = StyleSheet.create ({
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
