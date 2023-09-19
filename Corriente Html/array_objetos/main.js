const alumnos = [
    {
        legajo:234,
        usuario:'gdebernardini',
        password:'1234546',
        telefono:{
            celular:298543540,
            fijo:298434343
        }
    },
    {
        legajo:567,
        usuario:'mquiroga',
        password:'2345467',
        telefono:{
            celular:298654595,
            fijo:2984994343
        }
    }
]

alumnos.forEach(element => {
    console.log(element.usuario)
});