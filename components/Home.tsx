import { Image, Text, View, ScrollView, StyleSheet } from 'react-native'; // ScrollView allows scrolling
// image
import warehouse from '../assets/warehouse.jpg'; // works because of assets/index.d.ts
import { Base, Images, Typography } from '../styles'; // styling
import Stock from './Stock'; // Stock.tsx

// View and Text are Core components: https://reactnative.dev/docs/intro-react-native-components

// if below comments are placed in jsx code, following error will occur: Error: Text strings must be rendered within a <Text> component.

// brackets needed for JS inside JSX
// importing image, width and height must be defined to show image


export default function Home({products, setProducts}) { // { } destructures object
    
    return (
        <ScrollView>
            <View style={Base.base.style}>
                <Text style={Typography.header1}>Lager-Appen</Text>
                <Image source={warehouse} style={Images.warehouse} />
                <Stock products={products} setProducts={setProducts} />
            </View>
        </ScrollView>
    );
}


// comment: app is made up of different views. When app is built, i.e. Text view => TextView on Android