/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './src/screens/Home';
import Navigation from './src/navigation';
import { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { createUser } from "./src/graphql/mutations";
import { getUser } from "./src/graphql/queries";


const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};

const App: () => Node = () => {


  useEffect( () => {
    const fecthUser = async () => {
      //get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

      if (!userInfo) {
        return;
      }

      //check if the user exist in database
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser,{id: userInfo.attributes.sub}),
      );

      if (getUserResponse.data.getUser) {
        console.log("User already in database!");
        return;
      }

      // if user doesn't exist (i.e. a new user)
      // create a new user database
      const newUser =  {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };

      await API.graphql(graphqlOperation(createUser,{input: newUser}));

    };

    fecthUser();
  }, [])

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
