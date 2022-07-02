const stock = []

let ventanasGenericas = {id:1 ,nombre: "ventanas ", calidad : "generico", precio: 5000, cantidad: 4}
let ventadasDeDiseño= {id:2 ,nombre: "ventanas Diseñadas",calidad: "diseño", precio: 10000, cantidad: 2}
let mesasGenericas = {id:3 ,nombre: "mesas ", calidad:"generico", precio: 9000, cantidad: 2}
let mesasDeDiseño = {id:4 ,nombre: "mesas Diseñadas",calidad:"diseño", precio: 15000, cantidad: 1}
let sillasGenericas = {id:5 ,nombre: "sillas", calidad:" generico", precio: 3000, cantidad: 8}
let sillasDeDiseño = {id:6 ,nombre: "sillas Diseñadas",calidad:"diseño", precio: 8000, cantidad: 4}
let mueblesDeDiseño = {id:7 , nombre: "muebles Diseñados",calidad:"diseño", precio: 20000, cantidad: 5}
stock.push(ventanasGenericas,ventadasDeDiseño, mesasDeDiseño,mesasGenericas, sillasGenericas,sillasDeDiseño, mueblesDeDiseño)
console.log(stock)
//for(const productos of stock){console.log(`la cantidad de ${productos.nombre} es de ${productos.cantidad}`)}
alert("Realizando busquedad de stock")
alert("Filtrado por Id especifico")

let especifico = parseInt(prompt("coloque el id si lo sabe")) 

let resultadoEspecifico =  stock.find((producto) => producto.id === especifico)

alert("El resultado se muestra por consola")
console.log(resultadoEspecifico)

alert("Filtrado de calidad (diseño) o (generico)")
let resultado = prompt("coloque su palabra de busquedad")

let resultadoVariado = stock.filter((producto)=>producto.calidad == resultado)
console.log(resultadoVariado)

alert("El resultado se muestra por consola")
let stockTotal = 0

function acumular(cantidad){
    stockTotal += cantidad
}

stock.forEach((element, index) => {
    acumular(element["cantidad"])
    })
    alert("Su stock total de productos es de " + stockTotal + " elementos")