//import liraries
import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left} from 'native-base';

// create a component
class TimeLine extends Component {
  render() {
    return (
      <Card>
        <CardItem button onPress={this._PressCard}>
          <Left>
            <Thumbnail
              source={require('../../../assets/images/MainPage/TimeLine/daeguCircle01.png')}
            />
            <Body>
              <Text>어느 프로젝트에 인원이 추가되었습니다.</Text>
              <Text note>Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }

  _PressCard = () => {
    this.props.navigation.navigate('ProjectScreen');
  };
}

//make this component available to the app
export default TimeLine;
