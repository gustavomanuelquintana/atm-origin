const bcrypt = require('bcrypt');

let numberCard = bcrypt.hashSync('12345', 9);
console.log(numberCard)