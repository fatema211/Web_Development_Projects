// create the server 
import express from "express";
const port = 3000;
const app = express();

app.listen(port, () => {

console.log(`Server is running in port ${port}`)

}

)