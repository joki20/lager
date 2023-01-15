import { useState, useEffect } from 'react'; // in order to use state hooks, i.e. const [products, setProducts] for changing state
// https://reactjs.org/docs/hooks-intro.html

import { Text, View } from 'react-native'; // core component
import config from "../config/config.json"; // contains my api key and base url to lager
// styling from index.js - kmom02
import { Base, Typography } from '../styles';

// second argumenet is an empty array, meaning function only executes once.
// otherwise the function (fetch) inside useEffect would execute each time component is updated
function StockList() { // reusablle component inside Stock.tsx
    // fetch data
    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
    }, []);




    // state: products saves data, setProducts changes products. Start value is empty array
    // React Hooks allows changing state without needing to create a class for component, keeping the application function based
    const [products, setProducts] = useState([]);
    // create list with Text components from products array.
    // map iterates array and creates new array, each element with an unique key
    const list = products.map((product, index) => <Text key={index}>{ product['name'] } - { product['stock'] }</Text>);

    return (
        <View>
            {list}
        </View>
    );
}

 // styles needs to be inside brackets (outer brackets because JS inside JSX)
export default function Stock() {
    return (
        <View>
            <Text style={Typography.header3}>Lagerförteckning</Text>
            <StockList />
        </View>
    );
}