const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    console.log(`${method} ${url}`);

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Hello From Node.js');

    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('The Contact Page');

    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('The About Page');

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
    }
});
