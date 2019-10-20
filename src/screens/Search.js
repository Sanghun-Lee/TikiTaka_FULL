import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  AsyncStorage,
  ScrollView,
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import uuidv1 from 'uuid/v1';
import StatusBar from '../components/common/StatusBar';
import Subtitle from '../components/common/Subtitle';
import HistoryItem from '../components/Search/HistoryItem';

// state의 searchValue에 검색하려는 값이 들어가 있다.
export default class Search extends Component {
  state = {
    searchValue: '',
    loadedSearchHistory: false,
    History: {},
  };

  componentDidMount = () => {
    this._loadHistory ();
  };

  render () {
    const {searchValue, loadedSearchHistory, History} = this.state;
    // console.log (History);
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.searchHeader}>
          <TouchableOpacity
            style={styles.searchIconView}
            onPress={this._PressBackButton}
          >
            <Ionicons name="ios-arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            value={searchValue}
            onChangeText={this._controlSearchText}
            returnKeyType={'done'}
            autoCorrect={false}
            multiline={false}
            onSubmitEditing={this._PressSearchButton}
          />
          <TouchableOpacity
            onPress={this._PressSearchButton}
            style={styles.searchIconView}
          >
            <Ionicons name="ios-search" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <Subtitle subtitle="최근 검색 목록" />
        {loadedSearchHistory
          ? <ScrollView>
              {Object.values (History)
                .reverse ()
                .map (history => (
                  <HistoryItem
                    key={history.id}
                    {...history}
                    deleteSearchHistory={this._deleteHistory}
                    pressSearchHistory={this._PressSearchHistory}
                  />
                ))}
            </ScrollView>
          : <ScrollView>
              <View style={{alignItems: 'center'}}>
                <Text>최근 검색 목록이 없습니다.</Text>
              </View>
            </ScrollView>}
      </View>
    );
  }

  _PressBackButton = () => {
    this.props.navigation.goBack ();
  };

  _controlSearchText = text => {
    this.setState ({searchValue: text});
  };

  _loadHistory = async () => {
    try {
      const History = await AsyncStorage.getItem ('History');
      const parsedHistory = JSON.parse (History);
      console.log (!parsedHistory);
      if (Object.keys (parsedHistory).length) {
        this.setState ({loadedSearchHistory: true, History: parsedHistory});
      } else {
        this.setState ({History: parsedHistory});
      }
    } catch (err) {
      console.log (err);
    }
  };

  _PressSearchButton = () => {
    console.log ('검색버튼이 눌렸습니다.');
    console.log ('입력 값_ searchValue');
    console.log (this.state.searchValue);
    const {searchValue} = this.state;
    if (searchValue !== '') {
      this.props.navigation.navigate ('SearchResult');
      this.setState (prevState => {
        const ID = uuidv1 ();
        const newValueObject = {
          [ID]: {
            id: ID,
            text: searchValue,
            createdAt: Date.now (),
          },
        };
        const newState = {
          ...prevState,
          searchValue: '',
          History: {
            ...prevState.History,
            ...newValueObject,
          },
        };
        // this.setState({ loadedSearchHistory: true });
        this._saveHistory (newState.History);
        return {...newState};
      });
    } else {
      {
        Alert.alert ('입력값이 없습니다.', '검색어를 입력해 주세요');
      }
    }
  };

  _PressSearchHistory = id => {
    this.searchValue = History[id].text;
    this._deleteHistory (id);
    this._PressSearchButton ();
  };

  _deleteHistory = id => {
    this.setState (prevState => {
      const History = prevState.History;
      delete History[id];
      const newState = {
        ...prevState,
        ...History,
      };
      this._saveHistory (newState.History);
      return {...newState};
    });
  };

  _saveHistory = newHistory => {
    // console.log (JSON.stringify(newHistory));
    const saveHistory = AsyncStorage.setItem (
      'History',
      JSON.stringify (newHistory)
    );
  };
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchHistoryRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 0.5,
    height: 38,
  },
  searchHistoryTextTouchable: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  searchHistoryText: {
    fontSize: 14,
    color: '#040505',
    marginLeft: 18,
  },
  searchHistoryDeleteTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchHistoryDelete: {
    height: 15,
    width: 15,
  },
  searchBar: {
    flex: 7,
    backgroundColor: 'white',
    margin: 7,
    marginLeft: 11,
    borderRadius: 5,
    width: 15,
    padding: 3,
    paddingLeft: 8,
  },
  searchHeader: {
    backgroundColor: '#35CBEE',
    flexDirection: 'row',
    height: 43.26,
  },
  searchIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelImageStyle: {
    height: 15,
    width: 15,
  },
});
