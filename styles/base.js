import EStyleSheet from 'react-native-extended-stylesheet'; // allows 'rem'
import {variables as v} from './variables';
EStyleSheet.build(v);

export const App = EStyleSheet.create({
    style: {
        flex: 1,
    }
});

// styles.container (object with css code) prevents image to position in notch top of phone
export const base = EStyleSheet.create({
    style: {
        flex: 1, // moves image to top
        backgroundColor: v.$backgroundColor,
        justifyContent: 'flex-start', // vertical
        alignItems: 'center', // horizontal
        padding: v.$pagesPadding
    },
    stylePageWithDropdown: { // without alignItems center
        flex: 1, // moves image to top
        backgroundColor: v.$backgroundColor,
        justifyContent: 'flex-start', // vertical
        padding: v.$pagesPadding
    },
    ScrollView: {
        paddingHorizontal: 35,
    }
});

