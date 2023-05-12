import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { getSignup } from '../../features/signupSlice/SignupSlice';

import validator from '../../utils/Validator'
import { showError } from '../../utils/helperFuntion';
const SignupPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errortext, setErrortext] = useState('');
  const dispatch = useDispatch()

  const isValidator = ()=>{
    const error = validator({
      email,password
    })
    if(error){
      showError(error)
      return
    }
  }
  const handleSignup = () => {
 
   
    if (!name) {
      alert('Please enter your name');
      return;
    }
    if (!email) {
      alert('Please enter your email');
      return;
    }
    if (!password) {
      alert('Please enter your password');
      return;
    }
    if (!phone) {
      alert('Please enter your phone number');
      return;
    }
    if(name || email || password || phone) {
      console.log(name, email, password, phone, 'fdgdfg');
      dispatch(getSignup({name:name, email:email, password:password, phone:phone}))
    }
  };
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#efa248', '#f28346']}
        style={styles.linearGradient}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.welcomeMessage}>Signup to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Pressable onPress={() => navigation.navigate('LoginPage')}>
              <Text style={styles.login}>LOGIN</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.signup}>SIGNUP</Text>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#efa248', '#f28346']}
                style={styles.activeGradient}></LinearGradient>
            </Pressable>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={30}
              style={styles.personIcon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="User Name"
              value={name}
              onChangeText={setName}
            />
            <Fontisto name="email" size={30} style={styles.emailIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Fontisto name="phone" size={22} style={styles.phoneIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
            />
            <MaterialCommunityIcons
              name="lock-open-check-outline"
              size={30}
              style={styles.passwordsIcon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#efa248', '#f28346']}
            style={styles.buttonGradient}>
            <Pressable onPress={() => handleSignup()}>
              <Text style={styles.buttonText}>Signup</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </LinearGradient>
    </>
  );
};

export default SignupPage;

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
    height: 420,
    backgroundColor: '#fff',
    marginTop: 50,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  login: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signup: {
    color: 'black',
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
  personIcon: {
    color: 'gray',
    position: 'absolute',
    top: 30,
    left: 30,
  },
  emailIcon: {
    color: 'grey',
    position: 'absolute',
    top: 90,
    left: 30,
  },
  phoneIcon: {
    color: 'grey',
    position: 'absolute',
    top: 155,
    left: 30,
  },
  passwordsIcon: {
    color: 'grey',
    position: 'absolute',
    top: 208,
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
    marginTop: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
  },
});
