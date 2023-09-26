async function obtener_usuarios()
{
    const datos = await fetch("https://jsonplaceholder.typicode.com/users")
    
    // obtenemos un arreglo de objetos
    const usuarios = await datos.json()

    const filas = []
    usuarios.forEach( (element,index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
            </tr>
        `
        filas.push(fila)
    });

// el contenido de la entreda es html
    document.getElementById("tbl_body").innerHTML = filas.join('')
}

// Se ejecuta la funcion
obtener_usuarios()