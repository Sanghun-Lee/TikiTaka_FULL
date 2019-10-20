//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import ChatList from '../components/Chat/ChatList';

const chatList = [
  {
    id: 1,
    userList: ['이상훈'],
    chatRoomTitle: '티키타카',
  },
  {
    id: 2,
    userList: ['유창석'],
    chatRoomTitle: '티키타카',
  },
  {
    id: 3,
    userList: ['박승환'],
    chatRoomTitle: '티키타카',
  },
];

// create a component
class ChattingList extends Component {
  constructor (props) {
    super (props);

    this._ChatListOnPress = this._ChatListOnPress.bind (this);
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="채팅방 리스트" />
        {chatList.map ((chatlist, index) => {
          return (
            <ChatList
              onPress={() => this._ChatListOnPress (chatlist.id)}
              userList={chatlist.userList}
              chatRoomTitle={chatlist.chatRoomTitle}
              key={index}
            />
          );
        })}
      </View>
    );
  }
  _ChatListOnPress = id => {
    alert ('chat id : ' + id);
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ChattingList;
