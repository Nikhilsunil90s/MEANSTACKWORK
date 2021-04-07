// pure node js
const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Hello, From Server!!!!");
    //console.log(req.url ,req.method, req.headers);
    res.setHeader('Content-Type' , 'text/html')
    res.write("<h1 style='color:red; text-align: center'>Welcome To NodeJs!</h1>");
});

server.listen(3000);