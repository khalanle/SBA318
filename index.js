// import and install express
const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

const logReq = function (req, res, next) {
    console.log('Request Received');
    next();
}

// view engine
app


// error handling 
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
})

// routes
app.get("/api/cocktails", (req, res) => {
    //res.send('working route');
    res.json(cocktails.js)
})

// check if server running and listening for requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})