//import liraries
import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
class FavoriteButton extends Component {
  state = {
    isFavorite: false,
  };
  render() {
    const { isFavorite } = this.state;

    return (
      <TouchableOpacity style={styles.container} onPress={this._handlePressFavorite}>
        {isFavorite ? (
          <Image
            source={require('../../../../assets/images/Project/ProjectThumbnail/LikeEnable.png')}
            style={styles.ImageSize}
          />
        ) : (
          <Image
            source={require('../../../../assets/images/Project/ProjectThumbnail/LikeDisable.png')}
            style={styles.ImageSize}
          />
        )}
      </TouchableOpacity>
    );
  }

  _handlePressFavorite = () => {
    this.setState(prevState => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },
  ImageSize: {
    width: 26.96,
    height: 24.5,
  },
});

//make this component available to the app
export default FavoriteButton;
