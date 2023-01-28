import EStyleSheet from 'react-native-extended-stylesheet'; // allows 'rem'
import {variables as v} from './variables';
EStyleSheet.build(v);

// https://stackoverflow.com/questions/43585297/react-native-button-style-not-work

// links, buttons and input[type=submit]
export const btn = EStyleSheet.create({
    style: {
        // color
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(#fff, ¤eee)',
        textDecoration: 'none',
        // shape
        padding: '1.4rem 1rem',
        borderRadius: '0.2rem',
        borderWidth: 0,
        borderColor: 'black',
        lineHeight: v.$lineHeight,
        width: '100%',
        // position
        alignItems: 'center',
        margin: '0.7rem',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: v.$buttonFontSize,
        fontWeight: 'normal'
    }
})

// background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
export const greenBtn = EStyleSheet.create({
    style: {
        backgroundColor: v.$greenBackground,
    },
    text: {
        color: v.$buttonColor
    }
})

export const blueBtn = EStyleSheet.create({
    style: {
        backgroundColor: v.$blueBackground,
    },
    text: {
        color: v.$buttonColor
    }
})

export const redBtn = EStyleSheet.create({
    style: {
        backgroundColor: v.$redBackground,
    },
    text: {
        color: v.$buttonColor
    }
})

export const input = EStyleSheet.create({
    style: {
        fontSize: v.$bodyFontSize,
        lineHeight: v.$lineHeight,
        fontFamily: v.$bodyFontFamily,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        width: '100%'

    }
})

export const dropdown = EStyleSheet.create({
    style: {
        fontSize: v.$bodyFontSize,
        lineHeight: v.$lineHeight,
        fontFamily: v.$bodyFontFamily,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        width: '100%'
    }
})

export const inputLabel = EStyleSheet.create({
    style: {
        fontWeight: 'bold',
        margin: '2rem',
        marginBottom: 0,
        textTransform: 'uppercase',
        color: '#aaa'
    }
})

export const inputLabelFirst = EStyleSheet.create({
    style: {
        margin: '1rem',
        marginBottom: 0,
    }
})

// export const input = {
//     fontSize: 42,
//     marginBottom: 28,
//     color: "#33c",
// };


// export const input = {
//     fontSize: 42,
//     marginBottom: 28,
//     color: "#33c",
// };

// .input{
//     font-size: $body-font-size;
//     line-height: $line-height;
//     font-family: $font-body;
//     display: block;
//     border: 1pxsolid #ccc;
//     border-radius: 0.2rem;
//     padding: 0.6rem0.6rem;
//     box-sizing: border-box;
//     width: 32rem;
//     margin-bottom: 1.4rem;
// }




