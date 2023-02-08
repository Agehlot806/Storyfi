import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/SplashScreen';

 const Stack = createNativeStackNavigator();
function Navigation({ navigation }) {
   return (
    <NavigationContainer  >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
