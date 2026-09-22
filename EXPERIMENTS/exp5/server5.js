const http = require('http');

let items=['Apple','Banana'];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','application/json');

    if(req.method ==='GET'){
        res.end(JSON.stringify(items));
    }

    else if(req.method ==='POST'){
        let body ='';
        req.on('data',chunk => body +=chunk);
        req.on('end',() => {
            items.push(body);
            res.end('Item added: '+ body);
        });
    }
    else if(req.method ==='PUT'){
        items[0] ='Updated Items';
        res.end('First Item updated');
    }
    else if(req.method ==='DELETE'){
        items.pop();
        res.end('Last item removed');
    }
});

server.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
});