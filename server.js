import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import { escape } from 'querystring';
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname,__filename)

const server = http.createServer(async(req,res) => {
//   res.setHeader('Conten-Typr','text/html');
//   res.statusCode = 404;
  try {
    if(req.method === 'GET'){
        let filepath;
        if (req.url === '/'){
            filepath = path.join(__dirname,'public','index.html');
          }else if (req.url === '/about'){
            filepath = path.join(__dirname,'public','about.html');

          }else{
            throw new Error('not found')

          }
          const data = await fs.readFile(filepath);
          res.setHeader('Conten-type','text/html');
          res.write(data);
          res.end(); 

    }else{
        throw new Error('Method not allowed')
    }
}catch(error){
        res.writeHead(500,{'content-Type':'text/plain'});
        res.end('<h1>Server wrong</h1>');  
    }
});

server.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);//反引号：1的左边
});
