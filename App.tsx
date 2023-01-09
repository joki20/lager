import { StatusBar } from 'expo-status-bar'; // bottom of app, for development process
import { Image, StyleSheet, Text, View } from 'react-native'; // StyleSheet är stilmall
import { SafeAreaView } from 'react-native-safe-area-context'; // show elements within visible area, below top notch of view
import warehouse from './assets/warehouse.jpg'; // works because of assets/index.d.ts

import Stock from './components/Stock'; // do not write /Stock.tsx

// View and Text are Core components: https://reactnative.dev/docs/intro-react-native-components

// if below comments are placed in jsx code, following error will occur: Error: Text strings must be rendered within a <Text> component.

// brackets needed for JS inside JSX
// styles.container (object with css code) prevents image to position in notch top of phone
// importing image, width and height must be defined to show image

export default function App() {  // App is exported from App.tsx
    return (
        <SafeAreaView style={styles.container}>   
            <View style={styles.container}>       
                <Text style={{ color: '#33c', fontSize: 42 }}>Lager-Appen</Text>
                <Image source={warehouse} style={{ width: 320, height: 240 }} />
                <Stock />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // moves image to top
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// comment: app is made up of different views. When app is built, i.e. Text view => TextView on Android
