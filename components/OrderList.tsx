import { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Base, Forms, Typography } from '../styles'; // styling
import orders from './../models/orders';
import stock from './../models/stock';
import { Order } from './../interfaces/orders';

// 'List' page
export default function OrderList({route, navigation, products, setProducts }) {
    const [allOrders, setAllOrders] = useState<Order[]>([]); // Order objects sits inside an array, therefore Order[]

    // reload object set to false if navigating from Lager to Plock
    // reload is object variable if button "Plocka order" is pressed, from 'Details' page
    const { reload } = route.params || false;

    // get orders
    useEffect(() => {
        async function fetchData() {
            setAllOrders(await orders.getOrders());
        }
        // fetch data
        fetchData();

    }, []);

        // updateStates when backing from 'Details' page
    async function updateStates() {
        setAllOrders(await orders.getOrders());
        setProducts(await stock.getProducts());
    }

    if (reload) {
        updateStates();
    }
    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return (
                    <Pressable
                        style={[Forms.btn.style, Forms.blueBtn.style]}
                        key={index}
                        onPress={ () => {
                            navigation.navigate('Details', {
                                order: order,
                            });
                        }}
                    >
                    <Text style={[Forms.btn.text, Forms.blueBtn.text]}>{order.name}</Text>
                    {/* <Text style={Forms.btn.text}>{order.name}</Text> */}
                    </Pressable>
            )
        });
    
    return (
        <View style={Base.base.style}>
            <Text style={Typography.header3}>Ordrar redo att plockas</Text>
            {listOfOrders}
        </View>
    )
}





// 1. setAllOrders in useEffect sets value of allOrders
// 2. listOfOrders filters new orders (where "Ny"" is true) and then creates a button for all these new orders
// 3. each returned button is given a title and a key index
// 4. onPress callback navigates to our Details-view which was ddefined in StackNavigator
// 5. navigation object will be sent with call to OrderList component. The specific order will be sent as parameter to view






// TA TILLBAKA KODEN NEDAN OM JAG INTE LYCKAS
    // useEffect(() => {
    //     fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //         .then(response => response.json())
    //         .then(result => setAllOrders(result.data));
    // }, []); // second argument empty array to call fetch only once

