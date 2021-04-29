const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

//console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create GET route
app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

app.get('/display', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
    res.send({express: 'THIS IS THE JSON'});
    console.log("FROM SERVER");
});

app.get('/home', (req, res) => {
   res.send({express: 'THIS IS THE HOME PAGE'});
});

app.get('/', (req, res) => {
    res.send('HELLO HOME PAGE');
});