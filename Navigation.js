import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';


//Screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotScreen from "./screens/ForgotScreen"
import RegisterScreen from "./screens/RegisterScreen";
import PrincipalScreen from "./screens/PrincipalScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="PrincipalScreen"
        >
            <HomeStackNavigator.Screen
                name="PrincipalScreen"
                component={PrincipalScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <HomeStackNavigator.Screen
                name="Forgot"
                component={ForgotScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <HomeStackNavigator.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="PrincipalScreen"
            screenOptions={{
                tabBarActiveTintColor: 'green',
            }}
        >
            <Tab.Screen 
                name="Principal" 
                component={PrincipalScreen}
            />
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
            />
            <Tab.Screen 
                name="Forgot" 
                component={ForgotScreen}
            />
            <Tab.Screen 
                name="Register" 
                component={RegisterScreen}
            />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}