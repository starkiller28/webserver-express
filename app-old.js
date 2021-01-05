const http = require('http');

//creamos el servidor
http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        let salida = {
            nombre: 'Sebastián',
            edad: 20,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');