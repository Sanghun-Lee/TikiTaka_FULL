//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';

// create a component
class BottomButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    IconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
          onPress={this.props.onPress}
        >
          <Ionicons name={this.props.IconName} size={32} color="white" />
          <Text style={{fontSize: 15, color: 'white', marginLeft: 20}}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35CBEE',
    marginRight: 30,
    marginLeft: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

//make this component available to the app
export default BottomButton;
