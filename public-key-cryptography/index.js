

let bytes = new Uint8Array([0, 255, 256, 3, 400]);

bytes[1] = 300;
console.log("UInt8array: ", bytes);

function bytesToAscii (byteArray){
    return byteArray.map(byte => String.fromCharCode(byte)).join("")
}
bytes = [72, 101, 108, 108, 111];
const asciiString = bytesToAscii(bytes);
console.log(asciiString);

function asciiToBytes(asciiString) {
  const byteArray = [];
  for (let i = 0; i < asciiString.length; i++) {
    byteArray.push(asciiString.charCodeAt(i));
  }
  return byteArray;
}

// Example usage:
const ascii = "Hello";
let byteArray = asciiToBytes(ascii);
console.log(byteArray); 
// Output: [72, 101, 108, 108, 111]
function arrayToHex(byteArray) {
  let hexString = '';
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, '0');
  }
  return hexString;
}

// Example usage:
byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const hexString = arrayToHex(byteArray);
console.log(hexString); // Output: "48656c6c6f"

function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);

// import bs58 from 'bs58'
// function base58ToUint8Array(base58String) {
//   return bs58.decode(base58String);
// }

// // Example usage:
// const base58 = base58String; // Use the previously encoded Base58 string
// const byteArrayFromBase58 = base58ToUint8Array(base58);
// console.log(byteArrayFromBase58); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
