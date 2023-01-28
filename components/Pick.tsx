// kmom03 StackNavigator with components OrderList and PickList
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderList from './OrderList'; // print all orders
import PickList from './PickList'; // specific order and products in it

const Stack = createNativeStackNavigator();

// Stack send props 'navigation' and 'route' with screenProps for navigating back and route.params object for order
export default function Pick({ products, setProducts }) {

    return (
        <Stack.Navigator initialRouteName="List">

            <Stack.Screen name="List">
                {(screenProps) => <OrderList {...screenProps} products={products} setProducts={setProducts} />}
            </Stack.Screen>

            <Stack.Screen name="Details">
                {(screenProps) => <PickList {...screenProps} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}