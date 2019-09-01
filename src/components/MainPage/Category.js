//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from '../../components/common/Icon';

// create a component
class Category extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.eachSection}>
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateDesign1.png'),
            () => Alert.alert ('Design Select'),
            '디자인'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateMovie.png'),
            () => Alert.alert ('Movie Select'),
            '영상'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateTrans.png'),
            () => Alert.alert ('Translate Select'),
            '번역'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateCont.png'),
            () => Alert.alert ('Contents Select'),
            '컨텐츠 제작'
          )}
        </View>
        <View style={styles.eachSection}>
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateMarket.png'),
            () => Alert.alert ('Marketing Select'),
            '마케팅'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateFile.png'),
            () => Alert.alert ('File Select'),
            '문서'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/Kateless.png'),
            () => Alert.alert ('Sutdy Select'),
            '스터디'
          )}
          {this._CategoryImage (
            require ('../../../assets/images/MainPage/Category/KateMore.png'),
            () => Alert.alert ('See More Select'),
            '기타'
          )}
        </View>
      </View>
    );
  }

  _CategoryImage (source, onPress, text) {
    return (
      <TouchableOpacity onPress={onPress} style={{width: 44, height: 57}}>
        <Image source={source} style={{width: 44, height: 44}} />
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  eachSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

//make this component available to the app
export default Category;
