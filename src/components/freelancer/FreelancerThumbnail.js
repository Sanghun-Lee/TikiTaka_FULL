import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

// 이미지는 어떻게 받아야 되는거지
export default class FreelancerThumbnail extends Component {
  static propTypes = {
    major: PropTypes.string.isRequired,
    collage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    evaluation: PropTypes.number.isRequired,
    grade: PropTypes.number.isRequired,
    imgSrc: PropTypes.number.isRequired,
  };
  state = {
    isFavorite: false,
  };

  render () {
    const {isFavorite} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.container, {flex: 8}]}
          onPress={() => {
            this.props.navigation.navigate ('FreelancerScreen');
          }}
        >
          <View style={styles.ImageView}>
            <Image source={this.props.imgSrc} style={styles.ImageStyle} />
          </View>
          <View style={{flex: 2, flexDirection: 'column'}}>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {this.props.major}
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <View style={{flex: 1, marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={require ('../../../assets/images/Freelancer/FreelancerThumbnail/star.png')}
                    style={{width: 8.53, height: 8.11}}
                  />
                  <Text
                    style={{fontWeight: '100', fontSize: 10, marginLeft: 5}}
                  >
                    {this.props.rating}
                  </Text>
                </View>

                <Text style={{fontWeight: '100', fontSize: 10, marginTop: 5}}>
                  {this.props.evaluation}명의 평가
                </Text>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 12}}>
                  대학 : {this.props.collage}
                </Text>
                <Text style={{fontSize: 12}}>학년 : {this.props.grade}</Text>
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
                  source={require ('../../../assets/images/Freelancer/FreelancerThumbnail/LikeEnable.png')}
                  style={styles.favoriteImage}
                />
              : <Image
                  source={require ('../../../assets/images/Freelancer/FreelancerThumbnail/LikeDisable.png')}
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
