import { StyleSheet } from 'react-native';

export const warehouse = {
    width: 320,
    height: 240,
}

export const activeMenu = {
    color: 'blue'
}

export const inactiveMenu = {
    color: 'gray'
}

export const App = StyleSheet.create({
    container: {
        flex: 1, // moves image to top
        backgroundColor: '#fff',
    }
});

// styles.container (object with css code) prevents image to position in notch top of phone
export const Home = StyleSheet.create({
    container: {
        flex: 1, // moves image to top
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    ScrollView: {
        paddingHorizontal: 35,

    }
});


export const OrderList = StyleSheet.create({
    container: {
        flex: 1, // moves image to top
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    ScrollView: {
        paddingHorizontal: 35,

    }
});


export const orderBtn = {
    height: 100,
    width: 200,
    border: '2px solid black',
    color: 'red'

}

// App.tsx

// import Home from "../components/Home";

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, // moves image to top
//         backgroundColor: '#fff',
//     }
// });


// typography.js

// export const header1 = {
//     fontSize: 42,
//     marginBottom: 28,
// };

// export const header2 = {
//     fontSize: 34,
//     marginBottom: 28,
// };

// export const header3 = {
//     fontSize: 28,
//     marginBottom: 28,
// };

// export const normal = {
//     fontSize: 20,
//     marginBottom: 28,
// };




// Home.tsx
// export default function Home() {
//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <Text style={{ color: '#33c', fontSize: 42 }}>Lager-Appen</Text>
//                 <Image source={warehouse} style={{ width: 320, height: 240 }} />
//                 <Stock />
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, // moves image to top
//         backgroundColor: '#ddd',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: 20,
//     },
//     ScrollView: {
//         paddingHorizontal: 35,

//     }
// });
