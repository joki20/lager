// expo start - runs app
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; // bottom of app, for development process
import { View, ScrollView } from 'react-native'; // StyleSheet är stilmall
import { SafeAreaView } from 'react-native-safe-area-context'; // show elements within visible area, below top notch of view
// STYLING
import { Base, Menu, Forms, Typography } from './styles'; // styling from index.js - kmom02
// PAGES kmom02
import Home from "./components/Home"; // not ./components/Home.tsx
import Pick from "./components/Pick";
import Deliveries from "./components/Deliveries";
// NAVIGATION kmom02
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// MENU ICONS kmom02, see tab.Navigator where props is used and arrow to object with method tabBarIcon
import { Ionicons } from '@expo/vector-icons'; // use props to send data (installed from beginning)
// INTERFACES kmom02
import { Product } from './interfaces/products';
import { Order } from './interfaces/orders';
// MODELS
import stock from './models/stock';
import orders from './models/orders';

const Tab = createBottomTabNavigator();
const routeIcons = { // menu icons kmom02 (more icons here: https://icons.expo.fyi/ but filter on ionicons)
    "Lager": "home",
    "Plock": "list",
  };

// products och setProducts skickas ner till Pick, pga uppdatera produkterna där
// App => Home (Stock)
// App => Pick => OrderList
// App => Pick => PickList

// <Order>([]) meaning each element in array follows <Order> interface
export default function App() {
    const [products, setProducts] = useState<Product[]>([]); // => Home => Stock


    useEffect(() => {
        async function fetchData() {
            setProducts(await stock.getProducts());
        }
        // fetch data
        fetchData();

      }, []); // if empty only run once

    return (
        <SafeAreaView style={Base.App.style}>
            <View style={Base.App.style}>    
                <NavigationContainer>
                    <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName = routeIcons[route.name] || "alert";

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: Menu.activeMenu['color'],
                        tabBarInactiveTintColor: Menu.inactiveMenu['color'],
                    })}
                    >
                            <Tab.Screen name="Lager">
                                {() => <Home products={products} setProducts={setProducts} />}
                            </Tab.Screen>
                            
                            <Tab.Screen name="Plock">
                                {() => <Pick products={products} setProducts={setProducts} />}
                            </Tab.Screen>

                            <Tab.Screen name="Inleveranser" component={Deliveries} />

                    </Tab.Navigator>
                </NavigationContainer>
                <StatusBar />
            </View>
        </SafeAreaView>
    );
}

// useState empty array as start value
// View and Text are Core components: https://reactnative.dev/docs/intro-react-native-components
// if comments are placed in jsx code, following error will occur: Error: Text strings must be rendered within a <Text> component.
// brackets needed for JS inside JSX
// styles.container (object with css code) prevents image to position in notch top of phone
// importing image, width and height must be defined to show image
// comment: app is made up of different views. When app is built, i.e. Text view => TextView on Android
