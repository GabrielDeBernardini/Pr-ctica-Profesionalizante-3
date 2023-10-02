const express = require('express')

// ejecutamos express y nos retorna funcionalidades
const server = express()

// especificamos puerto donde correra nuestro server 
server.set('port',3000)

//ponemos en marcha nuestro servidor
// en el puerto 3000
server.listen(server.get('port'))

console.log('Servidor corriendo en el puerto:',server.get('port'))
