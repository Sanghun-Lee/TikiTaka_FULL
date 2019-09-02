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

import {Ionicons} from '@expo/vector-icons';

// create a component
class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.eachSection}>
          {this._CategoryIcon('md-brush', this._CategoryOnPress, '디자인')}
          {this._CategoryIcon('logo-youtube', this._CategoryOnPress, '영상')}
          {this._CategoryIcon('logo-google', this._CategoryOnPress, '번역')}
          {this._CategoryIcon('logo-python', this._CategoryOnPress, '코딩')}
        </View>
        <View style={styles.eachSection}>
          {this._CategoryIcon(
            'ios-musical-notes',
            this._CategoryOnPress,
            '음악'
          )}
          {this._CategoryIcon('ios-cog', this._CategoryOnPress, '공학')}
          {this._CategoryIcon('ios-book', this._CategoryOnPress, '스터디')}
          {this._CategoryIcon('ios-more', this._CategoryOnPress, '기타')}
        </View>
      </View>
    );
  }

  _CategoryImage(source, onPress, text) {
    return (
      <TouchableOpacity onPress={onPress} style={{width: 44, height: 57}}>
        <Image source={source} style={{width: 44, height: 44}} />
        <Text style={{textAlign: 'center'}}>{text}</Text>
      </TouchableOpacity>
    );
  }
  _CategoryIcon(name, onPress, text) {
    return (
      <TouchableOpacity onPress={onPress} style={{witdh: 44, height: 57}}>
        <Ionicons name={name} size={44} color="#38C8EC" />
        <Text style={{textAlign: 'center'}}>{text}</Text>
      </TouchableOpacity>
    );
  }

  _CategoryOnPress = () => {
    this.props.navigation.navigate('Category');
  };
}

// define your styles
const styles = StyleSheet.create({
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
