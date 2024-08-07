import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ScreenRoutes} from 'types';

import PostDetailScreen from '../screens/PostDetailScreen/PostDetailScreen';
import PostsScreen from '../screens/PostsScreen/PostsScreen';

import {Stack} from './AppNavigator.config';

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenRoutes.PostsScreen} component={PostsScreen} />
        <Stack.Screen name={ScreenRoutes.PostDetailScreen} component={PostDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
