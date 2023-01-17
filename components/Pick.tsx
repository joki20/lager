// kmom03 StackNavigator with components OrderList and PickList
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// styling from index.js - kmom02
import { Base, Typography } from '../styles';

import OrderList from './OrderList'; // print all orders
import PickList from './PickList'; // specific order and products in it

const Stack = createNativeStackNavigator();

// Stack automatically send props 'navigation'
export default function Pick(allOrders, setAllOrders, products, setProducts) {
    return (
        <Stack.Navigator initialRouteName="List">

            <Stack.Screen name="List">
                {() => <OrderList allOrders={allOrders} setAllOrders={setAllOrders} />}
            </Stack.Screen>

            <Stack.Screen name="Details">
                {() => <PickList  />}
            </Stack.Screen>

            <Stack.Screen name="Details" component={PickList} />
        </Stack.Navigator>
    );
}