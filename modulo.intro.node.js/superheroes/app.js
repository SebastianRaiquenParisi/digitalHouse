const fs = require('fs');
let moment = require('moment');
let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');
console.log(datos);
console.log(moment().format('DD MMM YYYY'));
const superheroes = require('./superheroes');
console.log(superheroes[1].saludar());