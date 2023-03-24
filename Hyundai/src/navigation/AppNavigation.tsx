import React from 'react';

import {MainTabsNavigation} from './MainTabsNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ChatScreen} from '~screens/additionally/chat/ChatScreen';
// import CardHistoryScreen from '~screens/HistoryScreen/cardHistory';
import AdditionalScreen from '../screens/AdditionalScreen';
import {MainScreen} from '../screens/MainScreen';
const MainStack = createNativeStackNavigator();

const AdditionalStack = createNativeStackNavigator();

export const PaymentStackScreen = () => (
  <AdditionalStack.Navigator
    initialRouteName="PaymentStackScreen"
    screenOptions={{
      contentStyle: {backgroundColor: '#fff'},
      headerShown: false,
    }}>
    <AdditionalStack.Screen
      name="PaymentScreen"
      component={AdditionalScreen}
      initialParams={{isGoBack: false}}
    />
  </AdditionalStack.Navigator>
);

export const MainStackScreen = () => (
  <MainStack.Navigator
    initialRouteName="MainStack"
    screenOptions={{
      contentStyle: {backgroundColor: '#fff'},
      headerShown: false,
    }}>
    <MainStack.Screen name="Main" component={MainScreen} />
  </MainStack.Navigator>
);

const AppStack = createNativeStackNavigator();
const MainNavigator = () => (
  <AppStack.Navigator
    initialRouteName="Main"
    screenOptions={{
      contentStyle: {backgroundColor: '#fff'},
      headerShown: false,
    }}>
    <AppStack.Screen name="Main" component={MainTabsNavigation} />
    {/* <AppStack.Screen name="CardHistoryScreen" component={CardHistoryScreen} />/ */}

    {/* <AppStack.Screen name="ChatScreen" component={ChatScreen} /> */}
  </AppStack.Navigator>
);

export const AppNavigator = () => {
  return (
    <>
      <MainNavigator />
    </>
  );
};
