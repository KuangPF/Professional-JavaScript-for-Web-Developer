console.log('module test');

import A1 from './a.js';

import {
  add
} from './b.js';

console.log(A1());
console.log(add(3, 4));