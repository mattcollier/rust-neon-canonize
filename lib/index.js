import {testVectors} from './mock-data.js';
import {createRequire} from 'module';
const require = createRequire(import.meta.url);
const addon = require('../native/index.node');
console.log('FFFFFFF', testVectors.alpha);

console.log(addon.hello(testVectors.alpha));
