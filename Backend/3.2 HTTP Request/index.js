import express from "express";
const port = 3000;
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Homepage</h1>");
});
app.get("/about", (req,res)=>{
    res.send("<h2>about</h2>");
});
app.get("/Contact", (req,res)=>{
    res.send("<h2>+491590000</h2>");
});


app.listen(port, () => {

console.log(`Server is running in port ${port}`)

}

)