//import liraries
import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left} from 'native-base';

// create a component
class TimeLine extends Component {
  render () {
    return (
      <Card>
        <CardItem button onPress={() => alert ('TimeLine onPress')}>
          <Left>
            <Thumbnail
              source={require ('../../../assets/images/MainPage/TimeLine/daeguCircle01.png')}
            />
            <Body>
              <Text>동아리든 프로젝트든 무슨 이름</Text>
              <Text note>Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody button onPress={() => alert ('card body onPress')}>
          <Image
            source={require ('../../../assets/images/MainPage/TimeLine/DaeguUniver.png')}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem button onPress={() => alert ('card Bottom Text onPress')}>
          <Text>
            이제 여기에 타임라인 안에 들어가는 내용이 들어오면 됩니다.
            제목이 필요하면 Text를 하나 더 만들어서 fontWeight만 900으로 만들어주면 금방 만들 수 있습니다.
          </Text>
        </CardItem>
      </Card>
    );
  }
}

//make this component available to the app
export default TimeLine;
