import config from "../config/config.json"; // kmom02 Ö3

import { Order } from '../interfaces/orders'

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

    getOrder: async function getOrder(order_id:any) {
        const response = await fetch(
            `${config.base_url}/orders/:${order_id}?api_key=${config.api_key}`
        );

        const result = await response.json();

        return result.data;
    },

    pickOrder: async function pickOrder(order) {
        // order ska innehålla objekt med order

        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad
        const response = await fetch(
            `${config.base_url}/orders`,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(order)
            });

         const result = await response.json();

         return result.data;

    },

    // fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //         .then(response => response.json())
    //         .then(result => setAllOrders(result.data));
};

export default orders;




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
// }