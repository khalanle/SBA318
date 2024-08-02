// import and install express
const express = require('express');
const app = express();
const PORT = 3000;

console.log('i am running');

// middleware
const logReq = function (req, res, next) {
    console.log('Request Received');
    next();
}

// error handling middleware
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
})

// route params
app.get("/", (req, res) => {
    res.send("Try navigating to /user.");
});

// routes
app.get('/', (req, res) => {
    res.send('this my home route');
})

// check if server running and listening for requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})