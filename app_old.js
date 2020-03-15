const http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-type':'application/json'});

    

    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080)

console.log('Escuchado el puerto 8080')