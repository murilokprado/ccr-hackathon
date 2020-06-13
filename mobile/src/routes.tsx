import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Camera from './pages/Camera';
import Search from './pages/Search';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Camera" component={Camera} />
        <AppStack.Screen name="Search" component={Search} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
