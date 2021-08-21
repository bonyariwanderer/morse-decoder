const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let array = [];
  let binary = [];
  let array5 = [];  
  let decoded = '';

  for (let i = 0; i < expr.length; i += 2) {
      binary.push(expr.slice(i, i + 2));
  }
  
  for (let i = 0; i < binary.length; i++) {

    if (binary[i] ==='00') {
      array.push(' ');
    } else if (binary[i] === '10') {
      array.push('.');
    } else if (binary[i] === '11') {
      array.push('-');
    } else if (binary[i] === '**') {
      array.push('*');
    }
  }
  
  for (let i = 0; i < array.length; i += 5) {
      array5.push(array.slice(i, i + 5).toString());
  }
  
  let arr = array5.map(e => e.replace(/,/g, ''));

  arr = arr.map(function (e) {
    return e.trim();
  });
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*****') {
      decoded += ' ';
    } else {
        decoded += (MORSE_TABLE[arr[i]]).toString();
      }
  }

  return decoded;
}

module.exports = {
    decode
}