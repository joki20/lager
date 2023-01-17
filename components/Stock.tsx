import { useState, useEffect } from 'react'; // in order to use state hooks, i.e. const [products, setProducts] for changing state
// https://reactjs.org/docs/hooks-intro.html

import { Text, View } from 'react-native'; // core component
import config from "../config/config.json"; // contains my api key and base url to lager
// styling from index.js - kmom02
import { Base, Typography } from '../styles';
// models kmom02
import stock from './../models/stock';


// second argumenet is empty array, meaning function only executes once. Otherwise function updated each time component is updated


//     // create and return list of Text elements
//     const list = products.map((product:{}, index:number) => <Text key={index}>{ product['name'] } - { product['stock'] }</Text>);

//     return (
//         <View>
//             {list}
//         </View>
//     );
// }

export default function Stock(products, setProducts) {
    // useEffect(() => {
    //     async function fetchData() {
    //       // You can await here
    //       const response = setProducts(await stock.getProducts())
    //     }
    //     // fetch data
    //     fetchData()


    //   }, []);


    list = products.map((product:{}, index:number) => <Text key={index}>{ product['name'] } - { product['stock'] }</Text>);
      

    return (
        <View>
            <Text style={Typography.header3}>Lagerförteckning</Text>
            {list}
        </View>
    );
}


















    // AVMARKERA OM USEEFFECT OVAN BLIR FEL
    // useEffect(() => {
    //     fetch(`${config.base_url}/products?api_key=${config.api_key}`)
    //     .then(response => response.json())
    //     .then(result => setProducts(result.data));
    // }, []);

