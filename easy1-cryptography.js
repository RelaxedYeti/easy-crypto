const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cryptoFlag = 'UFJKXQZQUNB';
const cryptoKey = 'SOLVECRYPTO';
let lettersArray = [];
let ctfFlag = '';
let table = {};

for(let i = 0; i < letters.length; i++) {
    lettersArray.push(letters[i]);
}

console.log('lettersArray', lettersArray);

for(let i = 0; i < lettersArray.length; i++) {
    let lettersCopy = JSON.parse(JSON.stringify(lettersArray));
    let shiftedLetters = lettersCopy.splice(0, i);
    table[lettersArray[i]] = lettersCopy.concat(shiftedLetters);
}

console.log('table', table);

for(let i = 0; i < cryptoFlag.length; i++) {
    let currentLettersArray = JSON.parse(JSON.stringify(table[cryptoFlag[i]]));
    let currentIndex = lettersArray.findIndex((value) => {
        return value == cryptoKey[i];
    });
    console.log('currentLetters', currentLettersArray, 'currentIndex', currentIndex)
    ctfFlag += currentLettersArray[currentIndex];
}

alert(ctfFlag);