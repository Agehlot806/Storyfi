import React, { useState } from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from './app/Appnavigatore/Navigation'

const App = () => {
  return (
    <PaperProvider>

    <Navigation/>
    </PaperProvider>

  );
};


export default App