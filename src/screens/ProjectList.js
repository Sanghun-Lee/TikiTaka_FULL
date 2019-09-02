//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, Alert, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import ProjectThumbnail from '../components/project/ProjectThumbnail';

import ActionButton from 'react-native-action-button';
import {Ionicon} from 'react-native-vector-icons/Ionicons';

const projectList = [
  {
    title: '프로젝트2',
    imgSrc: require('../../assets/images/Project/ProjectThumbnail/ProjectImage.png'),
    price: 20000,
    endDueDate: '19.08.31',
    Recruitment: 4,
    major: 'C, C++',
  },
];

// create a component
class ProjectList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <Subtitle subtitle="프로젝트" />
        <ActionButton
          buttonColor="rgba(231, 76, 60, 1)"
          onPress={() => Alert.alert('Filterbutton Clicked')}
        />
        <ScrollView>
          {projectList.map((projectList, index) => {
            return (
              <ProjectThumbnail
                imgSrc={projectList.imgSrc}
                title={projectList.title}
                price={projectList.price}
                endDueDate={projectList.endDueDate}
                Recruitment={projectList.Recruitment}
                major={projectList.major}
                key={index}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProjectList;
