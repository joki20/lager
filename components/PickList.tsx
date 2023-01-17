import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
// styling from index.js - kmom02
import { Base, Typography } from '../styles';


// 1. Vi kan från route objektet som per automatik skickas med som parameter till vår komponent när komponenten är en del av en navigationen hämta ut order.
// 2. Vi ritar sedan ut information om ordern och de orderrader som finns för ordern.
// 3. Sista delen av komponenten är att rita ut knappen för att plocka ordern
//     a.  Vi skapar sedan en funktion i vår komponent som vi vill ska anropas när vi trycker på knappen.
//     b. Vi lägger funktionen i komponenten för att vi vill att funktionen ska göra mer än en sak.


export default function PickList({ route, navigation }) {
    const { order } = route.params;

    // get order
    async function pick() {
        await orderModel.pickOrder(order);
        navigation.navigate("List");
    }

    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                key={index}
                >
                {item.name} - {item.amount} - {item.location}
        </Text>;
    });

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>

            {orderItemsList}

            <Button title="Plocka order" onPress={pick} />
        </View>
    )
};