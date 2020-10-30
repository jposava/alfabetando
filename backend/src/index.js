const http = require('http');
const host = '192.168.0.105';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Ola mundo \n meu primeiro script');
});

server.listen(port, host, () => {
    console.log(`Server rodando em http://${host}:${port}`);
});