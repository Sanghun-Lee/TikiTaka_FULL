//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picker from 'react-native-picker-modal-view';
import PropTypes from 'prop-types';

// create a component
class PickerModal extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Picker
          {...this.props}
          items={this.props.var}
          showToTopButton={true}
          autoSort={true}
          forceSelect={false}
          searchText={'Search...'}
          // chooseText={''}
          // selectPlaceholderText={''}
          // defaultSelected={this.state.selectedItem}
          // onSelected={selected => this.selected(selected)}
        />
      </View>
    );
  }
  // selected(selected) {
  //   this.setState({ selectedItem: selected });
  // }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

//make this component available to the app
export default PickerModal;
