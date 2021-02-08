const express = require('express')
const app = express();
const path = require('path')
const publicDirectory=path.join(__dirname, '../public')
console.log(publicDirectory)
app.use(express.static(publicDirectory))
app.get('/help', (req,res) =>{
    res.send("Hello Node");
} )

app.listen(3000,()=>{
    console.log("Server is up on port 3000")
});