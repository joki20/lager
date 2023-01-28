import config from "../config/config.json"; // kmom02 Ö3

const stock = {
    getProducts: async function getProducts(): Promise<[]> { // get stock
        const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
        const result = await response.json();
        
        return result.data;

    },

    setProducts: async function setProducts() { // change stock
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad
    },

    // fetch(`${config.base_url}/orders?api_key=${config.api_key}`)
    //         .then(response => response.json())
    //         .then(result => setAllOrders(result.data));
};

export default stock;