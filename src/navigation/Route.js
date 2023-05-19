import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const Route = () => {
  const [tokenCheck, setTokenCheck] = useState(false);
  const {isLogin} = useSelector(state => state.login);
  const {isSignup} = useSelector(state => state.signup);

  const checkAccessToken = async () => {
    const dataToken = await AsyncStorage.getItem('token');
    if (!dataToken) {
      setTokenCheck(false);
    } else {
      setTokenCheck(true);
    }
  };

  useEffect(() => {
    checkAccessToken();
  }, [isLogin, isSignup]);

  return (
    <NavigationContainer>
      <Stack.Navigator>{MainStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
