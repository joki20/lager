// we can now import all styles with import { Base, Typography } from '../styles'; in other files and use them as this:
// <Text style={Typography.header2}>Lagerförteckning</Text>
import * as Base from './base'; // base.js
import * as Typography from './typography'; // typography.js

export { Base, Typography };