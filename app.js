const http = require('http');
const fs = require("fs");
const url = require("url");
const path = require("path"); 
//const express = require('express');
require("dotenv").config();


const articles = [
    {id:1, text:"Article number1"},
    {id:2, text:"Article number2"},
    {id:3, text:"Article number3"}
];
// const requestListener = (req,res) => {
//     res.setHeader("Content-Type", "application/json");
//     switch (req.url){
//         case "/1"
//     }
// }
const server = http.createServer((req,res) => {
    console.log('REQUEST!');
    const filePath = path.join(__dirname ,"public", req.url === "/" ? "index.html" : req.url);
   
    let extName = path.extname(filePath);
    let contentType = 'text/html';
    
    switch(extName){
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //router
    if(req.url === '/'){
        res.end('Home page');
    }else if(req.url === '/our_team'){
        res.end('Our team');
    }else if(req.url === '/our_team/team.png'){
        res.end('Our team picture');
    }else if(req.url === '/index.html'){
      
        console.log(`File path: ${filePath}`);
        
        console.log(`Content-Type: ${contentType}`);
        res.writeHead(200, {"Content-Type":contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

    }else if(req.url === '/styles/main.css'){
      
        console.log(`File path: ${filePath}`);
        
        console.log(`Content-Type: ${contentType}`);
        res.writeHead(200, {"Content-Type":contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

    } else if(req.url === '/img/image.jpg'){
        console.log(`File path: ${filePath}`);
        
        console.log(`Content-Type: ${contentType}`);
        res.writeHead(200, {"Content-Type":contentType});
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
            // fs.readFile('./img/image2.jpg', function(err, image){
            //     if(err) throw err;
            //     res.setHeader('Content-Type','image/jpg');
            //     res.end(image);
            // });
      
    }else if(req.url === '/article'){
        if(!query.id){
        res.end('Articles')
        } else if(query.id){
            console.log(articles)
            articles.map((article) =>{
                console.log(articles)
                if (article.id === query.id){
                    console.log(article.text)
                }
                res.end(article.text)
            })
            
        }
    } else{
        res.end('404')
    }
});

server.listen(4000);
console.log("RUN!");