import { useState, useEffect } from 'react';
import { View, Text, Button, Pressable } from "react-native";
import { Base, Forms, Typography } from '../styles';
import orders from './../models/orders';

// 1. Vi kan från route objektet som per automatik skickas med som parameter till vår komponent när komponenten är en del av en navigationen hämta ut order.
// 2. Vi ritar sedan ut information om ordern och de orderrader som finns för ordern.
// 3. Sista delen av komponenten är att rita ut knappen för att plocka ordern
//     a.  Vi skapar sedan en funktion i vår komponent som vi vill ska anropas när vi trycker på knappen.
//     b. Vi lägger funktionen i komponenten för att vi vill att funktionen ska göra mer än en sak.

// 'Details' page
export default function PickList({ route, navigation }) {   
    // specific order object from navigation.navigate, destructure it
    const { order } = route.params;

    // create Text element
    const thisOrder = order.order_items.map((item, index) => {
        return <Text
                style={Typography.text.normal}
                key={index}
                >
                {item.name} - {item.amount} - {item.location}
        </Text>;
    });

    const notAllowedOrders = order.order_items.filter(order_item => {
        console.log(order_item);
        return order_item["amount"] > order_item["stock"]
    });

    console.log(notAllowedOrders.length)

    const orderButton = 
        <Pressable
            style={[Forms.btn.style, Forms.greenBtn.style]}
            onPress={async () => {
                await orders.pickOrder(order)
                .then(
                    navigation.navigate('List', {
                        reload: true,
                    })
                )
            }}
        ><Text style={[Forms.btn.text, Forms.greenBtn.text]}>Plocka order</Text></Pressable>



    return (
        <View style={Base.base.style}>
            <Text style={Typography.text.header2}>Kund:</Text>
            <Text
                style={Typography.text.normal}>
                    {order.name} {"\n"}
                    {order.address} {"\n"}
                    {order.zip} {order.city}
            </Text>

            <Text style={Typography.header3}>Produkter:</Text>

            {thisOrder}

            { notAllowedOrders.length > 0 ? null : orderButton}
            
        </View>
    )
};