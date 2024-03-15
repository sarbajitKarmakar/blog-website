import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 80;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render(__dirname+"/views/index.ejs");
})

app.listen(port,()=>{
    console.log("The website is working");
});