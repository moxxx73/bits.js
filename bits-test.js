const { rotateLeft, rotateRight, UNSIGNED } = require('./bits.js');

const TEST = (r, expected) => (r === expected) ? `Success (${r})` : `Failed (${r} !== ${expected})`

const ROTL_TEST = UNSIGNED(0x7ab6fbbf);
let r = rotateLeft(0xdeadbeef, 2);
console.log(`rotateLeft(0xdeadbeef, 2): ${TEST(r, ROTL_TEST)}`)

const ROTR_TEST = UNSIGNED(0xf7ab6fbb);
r = rotateRight(0xdeadbeef, 2);
console.log(`rotateRight(0xdeadbeef, 2): ${TEST(r, ROTR_TEST)}`)

