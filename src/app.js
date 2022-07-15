const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(4000,()=>console.log('Abriendo página'));
app.get('/',(req, res)=>res.send('hola mundo desde express'));