// we can now import all styles with import { Base, Typography } from '../styles'; in other files and use them as this:
import EStyleSheet from 'react-native-extended-stylesheet'; // allows 'rem'

import * as Base from './base'; // base.js
import * as Forms from './forms'; // form.js
import * as Images from './images'; // form.js
import * as Menu from './menu'; // menu.js
import * as Typography from './typography'; // typography.js

export { Base, Forms, Images, Menu, Typography };


