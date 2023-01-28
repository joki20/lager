import config from "../config/config.json"; // kmom02 Ö3
import { Text, Button } from 'react-native';
import stock from './stock';


import { Order } from '../interfaces/orders'

// async await always returns a Promise
// await is used inside async and before calling a function

// all orders can now be get by using const orders = await orderModel.getOrders(); or await orderModel.pickOrder()
// in those files that we have imported the model. Expecting a Promise of Order interface
const orders = {
    getOrders: async function getOrders() {
        const response = await fetch(
            `${config.base_url}/orders?api_key=${config.api_key}`
        );

        const result = await response.json();

        return result.data;
    },

    pickOrder: async function pickOrder(order) {
        let orderPossible = true;

        // check if order is possible
        order.order_items.forEach(order_item => {
            if ( order_item["amount"] > order_item["stock"] ) {
                return false
            }
        });

        // if order is possible, reduce each stock and send request with edited order
        if (orderPossible) {

            // change status of order
            order.status = "Packad";
            order.status_id = 200;
            order.api_key = config.api_key;

            console.log(order)
            
            // pack order
            const response = await fetch(
                `${config.base_url}/orders`,
                {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(order),
            });


            // update stock
            let product = {};            

            order.order_items.forEach(async order_item => {
                
                product.id = order_item["product_id"];
                product.name = order_item["name"];
                product.api_key = config.api_key;
                product.stock = order_item["stock"] - order_item["amount"];


                await fetch(
                    `${config.base_url}/products`,
                    {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(product),
                    }
                )
            });

        
        const result = await response.json();
        return result.data;

        }

    },

    // fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //         .then(response => response.json())
    //         .then(result => setAllOrders(result.data));
};






// async function getResponse() {
// 	const response = await fetch(
// 		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
// 		{
// 			method: 'GET',
// 			headers: {
// 				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
// 				'x-rapidapi-key': 'your_api_key'
// 			}
// 		}
// 	);


export default orders;


