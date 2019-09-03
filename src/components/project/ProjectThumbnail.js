import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

// 이미지는 어떻게 받아야 되는거지
export default class ProjectThumbnail extends Component {
  static propTypes = {
    imgSrc: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    endDueDate: PropTypes.string.isRequired,
    Recruitment: PropTypes.number.isRequired,
    major: PropTypes.string.isRequired,
  };

  render () {
    const {isFavorite} = false;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.container, {flex: 8}]}
          onPress={() => {
            this.props.navigation.navigate ('ProjectScreen');
          }}
        >
          <View style={styles.ImageView}>
            <Image source={this.props.imgSrc} style={styles.ImageStyle} />
          </View>
          <View style={{flex: 2, flexDirection: 'column'}}>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {this.props.title}
              </Text>
            </View>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 12}}>
                  모집인원 : {this.props.Recruitment}
                </Text>
                <Text style={{fontSize: 12}}>
                  필요 전공 : {this.props.major}
                </Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 10, justifyContent: 'flex-end'}}>
                  금액 : {this.props.price}
                </Text>
                <Text style={{fontSize: 10, justifyContent: 'flex-end'}}>
                  모집기한 : ~ {this.props.endDueDate}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.favoriteView}>
          <TouchableOpacity
            style={styles.favoriteOpacity}
            onPress={this._handlePressFavorite}
          >
            {isFavorite
              ? <Image
                  source={require ('../../../assets/images/Project/ProjectThumbnail/LikeEnable.png')}
                  style={styles.favoriteImage}
                />
              : <Image
                  source={require ('../../../assets/images/Project/ProjectThumbnail/LikeDisable.png')}
                  style={styles.favoriteImage}
                />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _handlePressProject = () => {
    this.props.navigation.navigate ('ProjectScreen');
  };
  _handlePressFavorite = () => {
    this.setState (prevState => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 92,
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
  },
  ImageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    width: 64.57,
    height: 64.57,
  },

  favoriteView: {
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    flex: 1,
    height: 92,
  },
  favoriteOpacity: {
    marginLeft: 5,
    marginTop: 60,
    width: 20,
    height: 20,
  },
  favoriteImage: {
    width: 17.7,
    height: 16.09,
  },
});
