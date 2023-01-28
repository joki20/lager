import { Text, View } from 'react-native'; // core component
import { Base, Typography } from '../styles'; // styling

export default function Stock({products, setProducts}) { // destructuring props

    const list = products.map((product:{}, index:number) => (
        <Text
            style={Typography.text.normal}
            key={index}
        >
            { product['name'] } - { product['stock'] }
        </Text>
    )
    );

    return (
        <View>
            <Text style={Typography.header3}>Lagerförteckning</Text>
            {list}
        </View>
    );
}