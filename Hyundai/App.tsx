/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {Provider} from 'react-redux';
import {AppNavigator} from './src/navigation/AppNavigation';
import {rootStore} from './src/store/rootStore';

function App(): JSX.Element {
  return (
    // <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
    <Provider store={rootStore}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
    // </ApplicationProvider>
  );
}

export default App;
