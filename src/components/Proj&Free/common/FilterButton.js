//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import PickerModal from 'react-native-picker-modal-view';

const gradeList = [
  { id: 1, Name: '1학년', Value: '1' },
  { id: 2, Name: '2학년', Value: '2' },
  { id: 3, Name: '3학년', Value: '3' },
  { id: 4, Name: '4학년', Value: '4' },
  { id: 5, Name: '5학년', Value: '5' },
  { id: 6, Name: '6학년', Value: '6' },
];

const collageList = [
  { id: 1, Name: '영남대학교', Value: '영남대학교' },
  { id: 2, Name: '대구대학교', Value: '대구대학교' },
  { id: 3, Name: '경북대학교', Value: '경북대학교' },
];
// create a component
class BottomButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    IconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    };
  }

  state = {
    visibleModal: null,
    value: 0,
  };

  _visibleSetNull = () => this.setState({ visibleModal: null });
  _visibleSetOne = () => this.setState({ visibleModal: 1 });
  selected(selected) {
    this.setState({ selectedItem: selected });
  }

  _renderJustButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalBackground}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={styles.filterSelectText}>필터 선택</Text>
        {this._renderJustButton('적용', this.props.onPress)}
        {this._renderJustButton('취소', this._visibleSetNull)}
      </View>
      <View>
        <Text style={styles.text}>1. 학년</Text>
        <PickerModal
          onSelected={selected => this.selected(selected)}
          items={gradeList}
          showToTopButton={true}
          defaultSelected={this.state.selectedItem}
          autoCorrect={false}
          chooseText={'원하는 학년을 선택하세요'}
          searchText={'Search...'}
          forceSelect={false}
          autoSort={true}
          selectPlaceholderText={'학년'}
        />
        <Text style={styles.text}>2. 학교</Text>
        <PickerModal
          onSelected={selected => this.selected(selected)}
          items={collageList}
          showToTopButton={true}
          defaultSelected={this.state.selectedItem}
          autoCorrect={false}
          chooseText={'원하는 학년을 선택하세요'}
          searchText={'Search...'}
          forceSelect={false}
          autoSort={true}
          selectPlaceholderText={'대학 선택'}
        />
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
          onPress={this._visibleSetOne}
        >
          <Ionicons name={this.props.IconName} size={32} color="white" />
          <Text style={{ fontSize: 15, color: 'white', marginLeft: 20 }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.visibleModal === 1}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          onRequestClose={this._visibleSetNull}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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
  filterSelectText: {
    fontWeight: 'bold',
    marginRight: 150,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 25,
    marginBottom: 20,
    padding: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalBackground: {
    backgroundColor: 'white',
    padding: 22,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginRight: 20,
    marginLeft: 20,
  },
});

//make this component available to the app
export default BottomButton;
