import React from "react"
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from "./HomeBottomTabNavigator";


const Stack = createStackNavigator();


const RootNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, 
                }}>
                <Stack.Screen name="Home" component={HomeBottomTabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default RootNavigation;