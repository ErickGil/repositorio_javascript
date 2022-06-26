let stock = []

let ventanas = {nombre: "ventanas genericas", precio: 5000, cantidad: 4}
let mesas = {nombre: "mesas genericas", precio: 10000, cantidad: 2}
let sillas = {nombre: "sillas genericas", precio: 3000, cantidad: 8}

stock.push(ventanas, mesas, sillas)
console.log(stock)
for(const productos of stock){console.log(`la cantidad de ${productos.nombre} es de ${productos.cantidad}`)}
console