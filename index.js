import express, { urlencoded } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let obj;

app.use(bodyParser.urlencoded({extended: true}));

if (obj) {
    console.log("true");
}else{
    console.log("False");
}


app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render(__dirname+"/views/index.ejs");
})

app.get("/form",(req,res)=>{
    res.render(__dirname+"/views/form.ejs");
})

app.post("/submit",(req,res)=>{
    const newObj = {
        head: res.body['heading'],
        comment: res.body['comment']
    }
    obj[res.body['name']] = newObj;
    res.render(__dirname+"/views/index.ejs");
});

app.listen(port,()=>{
    console.log("The website is working");
});