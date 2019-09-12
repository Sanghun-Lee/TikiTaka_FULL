import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SearchValue from './src/components/login/SignUp/TextBox';
import { Button } from 'native-base';

export default class temp extends Component {
  state = {
    searchValue: '',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SearchValue text="테스트" _controlTextInput={this._controlTextInput} buttonText="버튼s" />
        <Button rounded info onPress={() => alert(this.searchValue)}>
          <Text>버튼</Text>
        </Button>
      </View>
    );
  }

  _controlTextInput = text => {
    this.setState({ searchValue: text });
  };
}
