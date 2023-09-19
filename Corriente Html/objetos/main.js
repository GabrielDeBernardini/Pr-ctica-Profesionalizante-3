const empleado = {
    nombre: 'Juan',
    apellido: 'Perez'
    dni: 13478956,
    correos: {
        gmail:'jp@gmail.com',
        outlook:'jp@outlook.com'
    }
}

//forma 1
const nombre = empleado.nombre

//const gmail = empleado.correo.gmail
//const outlook = empleado.correo.outlook

//forma 2 - Destructuring Object
const { gmail, outlook } = empleado.correos
const { apellido } = empleado