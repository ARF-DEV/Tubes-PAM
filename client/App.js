import React, {Component, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screen/SplashScreen';
import BottomTab from './src/navigation/BottomNavigation';
import DescribeScreen from './src/screen/DescribeScreen';

import { Provider } from 'react-redux';
import {store} from './src/state/store';

const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="BottomTab" component={BottomTab}/>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="DescribeScreen" component={DescribeScreen} />                   
        </Stack.Navigator> 
          
      </NavigationContainer>
    </Provider>
  );
};



export default App;