import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const LoginPage = ({navigation}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#efa248', '#f28346']}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.welcomeMessage}>Signin to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Pressable>
              <Text style={styles.login}>LOGIN</Text>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#efa248', '#f28346']}
                style={styles.activeGradient}></LinearGradient>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignupPage')}>
              <Text style={styles.signup}>SIGNUP</Text>
            </Pressable>
          </View>
          <View style={styles.inputContainer}>
            <Fontisto name="email" size={30} style={styles.emailIcon} />
            <TextInput style={styles.inputField} placeholder='Email' />
            <MaterialCommunityIcons
              name="lock-open-check-outline"
              size={30}
              style={styles.passwordsIcon}
            />
            <TextInput placeholder='Password' style={styles.inputField} secureTextEntry={true} />
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#efa248', '#f28346']}
            style={styles.buttonGradient}>
            <Pressable>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </LinearGradient>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  linearGradient: {
    width: '100%',
    height: 370,
    alignItems: 'center',
  },
  header: {
    marginTop: 70,
    alignItems: 'center',
  },
  welcome: {
    fontStyle: 'italic',
    fontSize: 30,
    fontWeight: '400',
    color: '#fff',
  },
  welcomeMessage: {
    // marginTop: 20,
    paddingTop: 20,
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  formContainer: {
    width: '80%',
    height: 300,
    backgroundColor: '#fff',
    marginTop: 70,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  login: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signup: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
  },
  formHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 45,
    paddingRight: 45,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  inputField: {
    width: '100%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingLeft: 45,
    fontSize: 15,
    color: 'black',
  },
  emailIcon: {
    color: 'grey',
    position: 'absolute',
    top: 30,
    left: 30,
  },
  passwordsIcon: {
    color: 'grey',
    position: 'absolute',
    top: 90,
    left: 30,
  },
  buttonGradient: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
  },
  activeGradient: {
    width: '100%',
    height: 3,
    borderRadius: 20,
    // marginTop:2
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
  },
});
