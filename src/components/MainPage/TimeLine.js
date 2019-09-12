//import liraries
import React from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left } from 'native-base';

export default TimeLine = props => {
  return (
    <Card>
      <CardItem button onPress={props.onPress}>
        <Left>
          <Thumbnail source={props.thumbnail} />
          <Body>
            <Text numberOfLines={2}>
              <Text style={{ fontWeight: 'bold' }}>{props.writer}</Text>
              {props.description}
            </Text>
            <Text note>{props.writeDate}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};
