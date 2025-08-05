import crypto from "crypto";

//______________________>>>>>>My solution<<<<<<<<<<<<<<________________

// function myfunction (){
// let i = 0

// for (i = 1; i > 0;){

//     const input = `100xDevs ${Math.random() * 300}`
//     const hash = crypto.createHash('sha256').update(input).digest('hex');
//     console.log(input)
//     console.log(hash)
//     if (hash.startsWith('000000')){
//     console.log('Found : ', hash)
//     break;
//     } 
// }
// }
// myfunction();

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);



