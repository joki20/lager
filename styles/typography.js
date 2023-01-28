import EStyleSheet from 'react-native-extended-stylesheet'; // allows 'rem'
import {variables as v} from './variables';
EStyleSheet.build(v);

export const text = EStyleSheet.create({
    normal: {
        fontSize: v.$bodyFontSize,
        lineHeight: v.$bodyLineHeight,
        marginTop: 0,
        marginBottom: v.$bodyFontSize * v.$lineHeight,
        // paddingLeft: '1rem'
    },
    header1: {
        fontSize: '2.4rem',
        marginBottom: '2.8rem',
        // paddingLeft: '1rem'
    },
    header2: {
        fontSize: '2rem',
        marginBottom: '1.4rem',
        // paddingLeft: '1rem'
    },
    header3: {
        fontSize: '1.4rem',
        marginBottom: '1.4rem',
        // paddingLeft: '1rem'
    },

});


export const header1 = {
    fontSize: 42,
    marginBottom: 28,
    color: "#33c",
    paddingLeft: 20
};

export const header2 = {
    fontSize: 34,
    marginBottom: 28,
    paddingLeft: 20
};

export const header3 = {
    fontSize: 28,
    marginBottom: 28,
    color: '¤333',
    paddingLeft: 20
};

// export const normal = {
//     fontSize: '1rem',
//     lineHeight: '1.4rem',
//     marginBottom: '1.4rem'

// };