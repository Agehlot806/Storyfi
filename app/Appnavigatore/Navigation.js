import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/SplashScreen';
import SliderScreen from '../Screen/SliderScreen';
import Homescreen from '../Screen/Home/Homescreen';
import CategoriesScreen from '../Screen/Home/CategoriesScreen';
import SelectStory from '../Screen/Home/SelectStory';
import CreayteAcount from '../Screen/CreateAccount'
const Stack = createNativeStackNavigator();
function Navigation({ navigation }) {
  return (
    <NavigationContainer  >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="CreayteAcount" component={CreayteAcount} />

        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="SelectStory" component={SelectStory} />
        <Stack.Screen name="SliderScreen" component={SliderScreen} />
        <Stack.Screen name="Homescreen" component={Homescreen} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
