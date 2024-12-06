//import fs from 'fs';
import fs from 'fs/promises'


// readfile()-callback
// fs.readFile('./test.txt','utf8',(err,data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readfilesync
// const data = fs.readFileSync('./test.txt','utf8');
// console.log(data);

//readfile -promises.then()
// fs.readFile('./test.txt','utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//readfile async/await
const readFile = async() => {
    try{
    const data = await fs.readFile('./test.txt','utf8');
    console.log(data);
    }catch(error){
        console.log(error);
    }
};
 
const writeFile = async() =>{
    try{
        await fs.writeFile('./test.txt','writing...');
        console.log('file written to..');
    }catch (error){
        console.log(error)
    }
}

// appendFile

const appendFile = async () => {
    try{
        await fs.appendFile('./test.txt','\nappended text');
    }catch(error){
        console.log(error);
    }
}

const processFile = async () => {
    await writeFile();
    await appendFile();
    await readFile();
};

processFile();
