const express = require("express");
const path = require('path');
const {spawn} = require('child_process');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:"*"
}))

// app.get('/',(req,res)=>{
//     res.sendFile((path.join(__dirname, '/index.html')));
// });

app.get('/predict/', (req, res) => {
    console.log(req.query.query)
    const python = spawn("python", ["predictor.py",req.query.query]);
    python.stdout.on('data', function (data) 
    {
        console.log(data.toString());
        res.json({output :parseInt(data.toString().slice(1))});
    });    
});
app.listen(3000);