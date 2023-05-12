import React from 'react';
import LoginPage from '../pages/loginPage/LoginPage';
import SignupPage from '../pages/signupPage/SignupPage';

const AuthStack = Stack => {
  return (
    <>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupPage"
        component={SignupPage}
        options={{headerShown: false}}
      />
    </>
  );
};

export default AuthStack;
