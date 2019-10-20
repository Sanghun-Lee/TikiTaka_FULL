import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get ('window');

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat,
} = Animated;

function runTiming (clock, value, dest) {
  const state = {
    finished: new Value (0),
    position: new Value (0),
    time: new Value (0),
    frameTime: new Value (0),
  };

  const config = {
    duration: 1000,
    toValue: new Value (0),
    easing: Easing.inOut (Easing.ease),
  };

  return block ([
    cond (clockRunning (clock), 0, [
      set (state.finished, 0),
      set (state.time, 0),
      set (state.position, value),
      set (state.frameTime, 0),
      set (config.toValue, dest),
      startClock (clock),
    ]),
    timing (clock, state, config),
    cond (state.finished, debug ('stop clock', stopClock (clock))),
    state.position,
  ]);
}

export default class LoginPage extends Component {
  constructor () {
    super ();
    this.buttonOpacity = new Value (1);
    this.onStateChange = event ([
      {
        nativeEvent: ({state}) =>
          block ([
            cond (
              eq (state, State.END),
              set (this.buttonOpacity, runTiming (new Clock (), 1, 0))
            ),
          ]),
      },
    ]);

    this.onCloseState = event ([
      {
        nativeEvent: ({state}) =>
          block ([
            cond (
              eq (state, State.END),
              set (this.buttonOpacity, runTiming (new Clock (), 0, 1))
            ),
          ]),
      },
    ]);

    this.buttonY = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-50, 1],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputZindex = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputY = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputOpacity = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.rotateCross = interpolate (this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP,
    });
  }
  state = {
    userId: '',
    password: '',
  };

  render () {
    const {userId, password} = this.state;
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        {/* --------------------- 로고부분 ---------------------- */}
        <View style={{flex: 1}}>
          <Animated.View
            style={{
              alignItems: 'center',
              transform: [{translateY: this.bgY}],
            }}
          >
            <Image
              source={require ('../../assets/images/login/common/tikitakaLogo.png')}
              style={styles.logoImg}
            />
            <Text style={styles.sloganText}>LIKE A PING - PONG TABLE</Text>
          </Animated.View>
        </View>
        {/* --------------------- 로고부분 ---------------------- */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{translateY: this.buttonY}],
              }}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign In</Text>
            </Animated.View>
          </TapGestureHandler>
          <TouchableOpacity onPress={this._handleLoginButtonOnPress}>
            <Animated.View
              style={{
                ...styles.button,
                backgroundColor: '#2DB400',
                opacity: this.buttonOpacity,
                transform: [{translateY: this.buttonY}],
              }}
            >
              <Text style={{fontSize: 20, color: 'black'}}>
                Naver로 시작하기
              </Text>
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleLoginButtonOnPress}>
            <Animated.View
              style={{
                ...styles.button,
                backgroundColor: '#F7E600',
                opacity: this.buttonOpacity,
                transform: [{translateY: this.buttonY}],
              }}
            >
              <Text style={{fontSize: 20, color: 'black'}}>
                Kakao로 시작하기
              </Text>
            </Animated.View>
          </TouchableOpacity>
          <Animated.View
            style={{
              zIndex: this.textInputZindex,
              opacity: this.textInputOpacity,
              transform: [{translateY: this.textInputY}],
              height: height / 2 - 50,
              ...StyleSheet.absoluteFill,
              top: null,
              justifyContent: 'center',
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text
                  style={{
                    fontSize: 15,
                    transform: [{rotate: concat (this.rotateCross, 'deg')}],
                  }}
                >
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>
            <TextInput
              placeholder="EMAIL"
              style={styles.textInput}
              placeholderTextColor="black"
              onChangeText={text => this.setState ({userId: text})}
              value={userId}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                this.passwordInput.focus ();
              }}
            />
            <TextInput
              placeholder="PASSWORD"
              style={styles.textInput}
              placeholderTextColor="black"
              secureTextEntry={true}
              value={password}
              onChangeText={text => this.setState ({password: text})}
              ref={input => {
                this.passwordInput = input;
              }}
              onSubmitEditing={this._PressSignInButton}
            />
            <TouchableOpacity onPress={this._PressSignInButton}>
              <Animated.View style={styles.button}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  SIGN IN
                </Text>
              </Animated.View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', width: width}}>
              <TouchableOpacity
                onPress={this._PasswordReset}
                style={{alignItems: 'flex-start', marginLeft: 20}}
              >
                <Text style={{color: 'skyblue'}}>비밀번호 찾기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginLeft: width - 200}}
                onPress={this._PressSignUpButton}
              >
                <Text style={{color: 'skyblue'}}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    );
  }
  _handleLoginButtonOnPress = () => {
    this.props.navigation.navigate ('MainPage');
  };
  _PasswordReset = () => {
    this.props.navigation.navigate ('PasswordFind');
  };
  _handleLoginButtonOnPress = () => {
    this.props.navigation.navigate ('MainPage');
  };
  _PressSignUpButton = () => {
    this.props.navigation.navigate ('SignUpPage');
  };
  _PressSignInButton = () => {
    alert (
      'user ID : ' + this.state.userId + '\npassword : ' + this.state.password
    );
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  logoView: {
    alignItems: 'center',
    transform: [{translateY: this.bgY}],
  },
  logoImg: {
    height: 209,
    width: 159,
    marginTop: 150,
  },
  sloganText: {
    backgroundColor: 'transparent',
    fontSize: 13,
    color: 'rgba(109,203,232,1)',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 20,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  textInput: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});

/*
import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import Logo from '../components/login/common/Logo';
import APIButtonList from '../components/login/loginPage/APIButtonList';
import LoginForm from '../components/login/loginPage/LoginForm';
import Bottom from '../components/login/loginPage/Bottom';
import StatusBar from '../components/common/StatusBar';
export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar />
        <KeyboardAvoidingView style={{flex: 1}} behavior="height">
          <View style={styles.container}>
            <View style={{flex: 1}}>
              <Logo />
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 3}}>
                <APIButtonList navigation={this.props.navigation} />
              </View>
              <View style={{flex: 5}}>
                <LoginForm navigation={this.props.navigation} />
              </View>
              <View style={{flex: 3}}>
                <Bottom navigation={this.props.navigation} />
              </View>
              <View style={{flex: 5}} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
*/
