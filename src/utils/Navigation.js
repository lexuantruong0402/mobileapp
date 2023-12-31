import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import ListAccountScreen from '../views/ListAccountScreen';
import AddAccountScreen from '../views/AddAccountScreen'
import ReportScreen from '../views/ReportScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListAccount" component={ListAccountScreen} />
        <Stack.Screen name="AddAccount" component={AddAccountScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;