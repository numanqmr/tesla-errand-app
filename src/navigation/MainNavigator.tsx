import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MapScreen} from '../features/Map/screens';
import {SCREEN_NAMES} from '../constants';

const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={SCREEN_NAMES.MAP_SCREEN} component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainNavigator};
