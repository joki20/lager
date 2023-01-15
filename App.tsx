// expo start - runs app

import { StatusBar } from 'expo-status-bar'; // bottom of app, for development process
import { Image, StyleSheet, Text, View } from 'react-native'; // StyleSheet är stilmall
import { SafeAreaView } from 'react-native-safe-area-context'; // show elements within visible area, below top notch of view
// styling from index.js - kmom02
import { Base, Typography } from './styles';

// pages kmom02
import Home from "./components/Home"; // not ./components/Home.tsx
import Pick from "./components/Pick";
// navigation kmom02
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// menu icons kmom02, see tab.Navigator where props is used and arrow to object with method tabBarIcon
import { Ionicons } from '@expo/vector-icons'; // use props to send data (installed from beginning)

const Tab = createBottomTabNavigator();

// menu icons kmom02 (more icons here: https://icons.expo.fyi/ but filter on ionicons)
const routeIcons = {
    "Lager": "home",
    "Plock": "list",
  };


// View and Text are Core components: https://reactnative.dev/docs/intro-react-native-components

// if below comments are placed in jsx code, following error will occur: Error: Text strings must be rendered within a <Text> component.

// brackets needed for JS inside JSX
// styles.container (object with css code) prevents image to position in notch top of phone
// importing image, width and height must be defined to show image

export default function App() {  // App is exported from App.tsx
    return (
        <SafeAreaView style={Base.App.container}>
            <View style={Base.App.container}>      
                <NavigationContainer>

                    <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = routeIcons[route.name] || "alert";

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: Base.activeMenu['color'],
                        tabBarInactiveTintColor: Base.inactiveMenu['color'],
                    })}
                    >
                        <Tab.Screen name="Lager" component={Home} />
                        <Tab.Screen name="Plock"  component={Pick} />
                    </Tab.Navigator>

                </NavigationContainer>
                <StatusBar />
            </View>
        </SafeAreaView>
    );
}


// comment: app is made up of different views. When app is built, i.e. Text view => TextView on Android
