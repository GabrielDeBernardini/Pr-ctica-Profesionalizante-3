function mostrar(){
    alert('Probando mi funcion')
}

//Fundamento8s

//Variables (let y var)

// Se declara una variable y se asigna un valor
var edad = 10
var edad = 20 // var permite volver a declarar aunque ya la declaraste antes
console.log('Edad:',edad) // imprime un 20

// declaro una unica vez la variable usando let
let edades = 15
edades = 20
console.log('Edades:',edades)

var antiguedad = 10
if(antiguedad > 5){
    var antiguedad = 20
    console.log('Antiguedadd:',antiguedad)
}
console.log(' Antiguedad:',antiguedad)

let numero = 10
if (numero > 5) {
    let numero = 20
    console.log('Numero:',numero) // Este si imprime de lo adentro del if
}
console.log('Numero:',numero) // solo ve lo de afuera del if e imprime solo el 1 let

// Constantes
const dni = 26750170
// dni = 29919538 // Nop se puede asignar un nuevo valor a una constante error
console.log('DNI:',dni)

const age = 40
if (age > 21){
    const age = 25
    console.log('Age:',age)
}
console.log('Age:',age)

const miArreglo = [10,20,30]
miArreglo.push(40,50)
console.log(miArreglo) // La constante con el push te permite agregar varios elemento y se imprime (lo que no se puede hacer es modificar)

// objetos
const mascota = {
    nombre: 'Tom',
    edad: 5,
    tipo: 'gato'
  }
  mascota.raza = 'peludo'
  console.log(mascota)
  console.log(mascota.raza)