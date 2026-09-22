const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end("Home page");
    } 
    else if(req.url === '/about'){
        res.end("About page");
    }
    else if( req.url ==="/students" && req.method === "GET"){
        res.end("GET: Student data");
    }

    else{
        res.end("Page not found");
    }
});
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });
