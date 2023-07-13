const http = require('http')                        /*declares http as a constant variable and grabs http package in node.js*/
const serv = http.createServer((req, res) => {      /*creates and starts a server from node.js -- createServer is a callback function.*/
    console.log(req.url)                            /*displays to the console the url request.*/
    res.end('Hello Node.js')                        /*response is going to be hello node.js as a string.*/
})

Server.listen(3000)