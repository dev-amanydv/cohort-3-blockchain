//bit
const x = 3;
console.log("bit:",x)

//byte
const y = 202;
console.log("Byte: ", y)

//array of bytes
const z = [202, 304, 105, 255, 256]
console.log("Bytes array: ", z)

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
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: [72, 101, 108, 108, 111]
