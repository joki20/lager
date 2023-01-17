import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import config from "./../config/config.json";
// styling from index.js - kmom02
import { Base, Typography } from '../styles';
// models kmom02
import orders from './../models/orders';
// interface kmom02
import Order from './../interfaces/orders';

// 1. setAllOrders in useEffect sets value of allOrders
// 2. listOfOrders filters new orders (where "Ny"" is true) and then creates a button for all these new orders
// 3. each returned button is given a title and a key index
// 4. onPress callback navigates to our Details-view which was ddefined in StackNavigator
// 5. navigation object will be sent with call to OrderList component. The specific order will be sent as parameter to view
export default function OrderList({ navigation, allOrders, setAllOrders }) {

    useEffect(async () => {
        setAllOrders(await orders.getOrders());
    }, []); // second argument empty array to call fetch only once

    
// TA TILLBAKA KODEN NEDAN OM JAG INTE LYCKAS
    // useEffect(() => {
    //     fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //         .then(response => response.json())
    //         .then(result => setAllOrders(result.data));
    // }, []); // second argument empty array to call fetch only once


    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.name}
                key={index}
                onPress={ () => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });
    
    return (
        <View style={Base.OrderList.container}>
            <Text>Ordrar redo att plockas</Text>
            {listOfOrders}
        </View>
    )
}