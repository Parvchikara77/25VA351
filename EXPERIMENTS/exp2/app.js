const fs= require("fs");

//CREATE
fs.writeFile("example.txt","Hello World!", (err)=>{
    if(err) throw err;
    console.log('File created!');
});
    
    //READ
    fs.readFile("example.txt", "utf8", (err, data)=>{

        console.log('file content: ',data);
});

    //UPDATE
    fs.writeFile('example.txt','This is the updated content', (err)=>{
        if(err) throw err;
        console.log('File overwritten(updated)!');
        });
        //UPDATE (APPEND)
    fs.appendFile('example.txt','\n This line was added.', (err)=>{
        if(err) throw err;
        console.log('File updated(Appended)!');
    
});

    //DELETE
    fs.unlink('example.txt', (err)=>{
        if(err) throw err;
        console.log('File deleted!');
    });