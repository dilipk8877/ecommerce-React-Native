import React from 'react';
import {View} from 'react-native';
import Route from './src/navigation/Route';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Route />
      <FlashMessage position="top" /> 
    </View>
  );
};

export default App;
