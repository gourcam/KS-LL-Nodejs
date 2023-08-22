// 

// function Print() {
//     var text = 'Console Write Test';
//     console.log(text);
// }

const Print = () => {
    const text = 'Console write test';

    console.log(text);
}

const Decimal = require('decimal.js');

console.log('sonuc', 0.1 + 0.2);

const result = new Decimal(0.1).plus(0.2);
console.log('sonuc2:',result.toString());