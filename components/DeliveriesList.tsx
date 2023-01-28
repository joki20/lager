import { View, Text, Button, Pressable } from 'react-native';
import { Base, Typography } from '../styles';

export default function DeliveriesList({ navigation }) {
    return (
        <View style={ Base.base }>
            <Text style={Typography.header2}>Inleveranser</Text>
            {/* {listOfDeliveries} */}
            <Pressable
                onPress={() => {
                    navigation.navigate('Form');
                }}

            >
                <Text>Skapa ny inleverans</Text>
            </Pressable>



        </View>
    )
}