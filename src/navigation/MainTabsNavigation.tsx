import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {tabs} from './tabsList';

const {Navigator, Screen} = createBottomTabNavigator();

export const MainTabsNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 88,
          display: 'flex',
          alignItems: 'center',
          bottom: 0,
        },
        tabBarAllowFontScaling: false,
        tabBarItemStyle: {
          marginTop: Platform.OS === 'ios' ? 10 : 20,
          display: 'flex',
          height: 48,
        },
        tabBarLabelStyle: {
          width: '100%',
        },
      }}>
      {tabs.map(tab => {
        return (
          <Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => <tab.icon isActive={focused} />,
              tabBarActiveTintColor: '#0082BA',
            }}
          />
        );
      })}
    </Navigator>
  );
};
