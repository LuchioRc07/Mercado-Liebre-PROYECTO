const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3020, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.send('Hello Word');
});