import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// @ts-ignore
import logo from './assets/instagram.png';

import Feed from './pages/Feed/Feed';

const Routes = createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed
    }
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: () => <Image source={logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5'
      }
    }
  })
);

export default Routes;

