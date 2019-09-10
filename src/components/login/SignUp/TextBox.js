//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from 'native-base';

// create a component
class TextBox extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    button: PropTypes.bool,
    password: PropTypes.bool,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 15}}>{this.props.text}</Text>
        </View>
        <View style={{flex: 5}}>
          {this.props.password ? (
            <TextInput style={styles.textInput} secureTextEntry={true} />
          ) : (
            <TextInput style={styles.textInput} />
          )}
        </View>
        <View style={{flex: 2}}>
          {this.props.button ? (
            <TouchableOpacity
              style={{
                backgroundColor: 'skyblue',
                height: 30,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}
              onPress={() => alert('중복 확인')}
            >
              <Text style={{color: 'white', fontSize: 11}}>중복확인</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInput: {
    height: 30,
    width: 200,
    borderRadius: 15,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});

//make this component available to the app
export default TextBox;
