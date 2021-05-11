/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/navigation';

import { withAuthenticator } from "aws-amplify-react-native";

const App: () => Node = () => {

  return (
    <>
      <StatusBar barStyle= 'light-content' />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation/>
      </SafeAreaView>
    </>
  );
};



export default withAuthenticator(App);
