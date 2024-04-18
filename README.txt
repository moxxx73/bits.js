Javascript Bit Manipulation
---------------------------

If u aren't already aware, javascript default number type is a 64-bit floating point (double).
JS is high level and more accessible so I can understand why doubles are used instead of having
implementations of ints and floats.

It should be noted that JS doesnt just use doubles; It uses 32-bit integers when indexing and for
bitwise operations. There is also the more recent BigInt type which was added not too long ago,
which uses 64-bit integers.

### Bitwise operations

as JS only uses 32-bit ints for bitwise ops it makes that you can only shift by (2**5)-1 or 31 places.
Theres also the handy `>>>` operator which will shift right and zero fill instead which can be used to
define the `UNSIGNED` function:

	const UNSIGNED = (n) n>>>0;



### Bits.js

bits.js is just some code i wrote to explore bit manipulation in JS and how a high a level language implements
them. if there's anything else i think is relevant i'll push it here

