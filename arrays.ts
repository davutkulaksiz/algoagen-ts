// this is not an  array
const a = [];

// An array is a simple contiguous memory space

const arr = new ArrayBuffer(6);
console.log(arr);
// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const arr8 = new Uint8Array(arr);
arr8[0] = 45;

console.log(arr);
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }

arr8[2] = 45;
console.log(arr);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

const arr2 = [-4, 3, -9, 0, 4, 1];

// insertion and deletion are both O(1) 

// ARRAYS
// Fixed size, continigiuous memory chunks
// That means you cannot grow it