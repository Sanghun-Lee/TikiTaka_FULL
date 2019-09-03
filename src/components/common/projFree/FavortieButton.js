//import liraries
import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
class FavoriteButton extends Component {
  state = {
    isFavorite: false,
  };
  render () {
    const {isFavorite} = this.state;

    return (
      <TouchableOpacity
        style={{width: 30, height: 30}}
        onPress={this._handlePressFavorite}
      >
        {isFavorite
          ? <Image
              source={require ('../../../../assets/images/Project/ProjectThumbnail/LikeEnable.png')}
              style={{width: 26.96, height: 24.5}}
            />
          : <Image
              source={require ('../../../../assets/images/Project/ProjectThumbnail/LikeDisable.png')}
              style={{width: 26.96, height: 24.5}}
            />}
      </TouchableOpacity>
    );
  }

  _handlePressFavorite = () => {
    this.setState (prevState => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default FavoriteButton;
