const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',api);
app.get('/', function(req, res) {
    res.send('Hello from server');
})
app.listen(PORT, function(){
    console.log("Server running on localhost:" + PORT);
})