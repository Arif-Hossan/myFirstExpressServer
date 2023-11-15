const express = require('express')
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello ,Buddy')
})

app.listen(port,()=>{
    console.log(`Exploring the unknown sea on ${port}`);
})