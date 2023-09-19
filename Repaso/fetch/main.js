async function solicitar(){
    const lista = await fetch ("")

    //Convertir los datos recibidos en una expresion nativa de javascript
    const lista_definitiva = await lista.json()
    
    lista_definitiva.array.forEach(element => {
        console.log(element)
    });

}