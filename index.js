import express, { urlencoded } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let obj = {} ;  //to store the blogs


app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));

app.get("/",(req,res)=>{
    
    console.log(obj); 
    const objLength = Object.keys(obj).length; // getting the obj length
    res.render(__dirname+"/views/index.ejs",{obj,objLength}); //sent the obj and obj length
})

app.get("/form",(req,res)=>{
    res.render(__dirname+"/views/form.ejs");
})

app.post("/submit",(req,res)=>{
    const newObj = { //store the values
        head: req.body['heading'],
        comment: req.body['comment']
    }
    obj[req.body['name']] = newObj;
    res.redirect("/");

});

app.get('/delete/:key', (req, res)=>{
    const key = req.params.key
    delete obj[key]

    res.redirect('/')
})

app.listen(port,()=>{
    console.log("The website is working");
});
