import { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button, Pressable } from 'react-native';
import { Base, Forms, Typography } from '../styles';
import { Product } from '../interfaces/products';
import {Picker} from '@react-native-picker/picker'; // dropdown menu
import stock from '../models/stock';
import Delivery from '../interfaces/delivery';

// Partial means that doesn't have to have all key-values of Delivery interface
export default function DeliveryForm({ navigation }) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});
    const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});


function ProductDropDown(props) { // props.delivery, props.setDelivery and props.setCurrentProduct
    const [products, setProducts] = useState<Product[]>([]);
    let productsHash: any = {};

    // get products
    useEffect(() => {
        async function fetchData() {
            setProducts(await stock.getProducts())
        }
        // fetch data
        fetchData();
    }, []);
    

    // create dropdown list of products
    const itemsList = products.map((prod, index) => {
        productsHash[prod.id] = prod;
        return <Picker.Item key={index} label={prod.name} value={prod.id} />;
    });

    // I nedanstående kod sätter vi först värdet på dropdownen med product_id från props.
    // Varje gång vi ändrar värde i dropdownen vill vi att två saker ska hända:
    // Först sätter vi product_id attributet på samma sätt som för de andra fälten och
    // vi utnyttjar sedan props.setCurrentProduct för att tilldela hela produkt objektet till currentProduct i DeliveryForm-komponenten.
    // Slutligen skriver vi ut alla valen med hjälp av itemsList-variabeln.
    return (
        <Picker
            selectedValue={props.delivery?.product_id}
            onValueChange={(itemValue) => {
                props.setDelivery({ ...props.delivery, product_id: itemValue }); // add product_id to empty delivery object
                props.setCurrentProduct(productsHash[itemValue]);
            }}>
            {itemsList}
        </Picker>
    )
}
    


    function addDelivery() {
        // skicka delivery till delivery model
        // öka antalet produkter i lagret för vald produkt
    }

    // ...delivery copies delivery object, adding key-valuje comment: content
    // ProductDropDown contains three props
    return (
        <ScrollView>
            <View style={Base.base.stylePageWithDropdown}>
                <Text style={ Typography.header2 }>Gör ny inleverans</Text>
                


                <Text style={ Forms.inputLabel.style }>Produkt</Text>
                <ProductDropDown
                    style={ Forms.dropdown.style }
                    delivery={delivery}
                    setDelivery={setDelivery}
                    setCurrentProduct={setCurrentProduct}
                />

                <Text style={ Forms.inputLabel.style }>Antal</Text>
                <TextInput
                    style={ Forms.input.style }
                    onChangeText={(content: string) => {
                        // problem: parseInt can't handle empty string as input, creates NaN
                        let numericValue;
                        content ? numericValue = parseInt(content) : numericValue = "";

                        setDelivery({ ...delivery, amount: numericValue}); // convert to int for interface
                    }}
                    value={delivery?.amount?.toString()}
                    keyboardType="numeric"
                />


                <Text style={ Forms.inputLabel.style }>Kommentar</Text>
                <TextInput
                    style={ Forms.input.style }
                    onChangeText={(content: string) => {
                        setDelivery({ ...delivery, comment: content });
                    }}
                />


                <Pressable style={[ Forms.btn.style, Forms.greenBtn.style ]}
                    onPress={() => {
                        console.log(currentProduct, delivery)
                        // addDelivery(currentProduct, delivery);
                    }}

                >
                    <Text style={[ Forms.btn.text, Forms.greenBtn.text ]}>Gör inleverans</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}