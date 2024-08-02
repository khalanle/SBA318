// import and install express
const express = require('express');
const app = express();
const PORT = 3000;
// 
console.log('i am running');

// middleware
// this is us defining our own custom middleware
const logReq = function (req, res, next) {
    console.log('Request Received');
    // console.log('I could be checking for a valid url in here');
    // we have access to request and response
    // console.log(req.params);
    // this was my entire response object
    //console.log(res);
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

app.get("/user", (req, res) => {
    res.send(`Received a GET request for user!
        Try navigating to /user/somevalue/profile/somevalue.`);
});

// you want any urls that are specified and not using the parameter
// to be above the url with the parameter
app.get("/user/list", (req, res) => {
    res.send('I can send a list of all users')
})

app.get("/user/:userID", (req, res) => {
    console.log(req.params);
    console.log(req.params.userID);
    res.send(`Navigated to the user page for: ${req.params.userID}.`)
});

// this would not get seen because
// an input url would be interpreted as a userID = 'list'
// app.get("/user/list", (req, res) => {
//     res.send('I can send a list of all users')
// })

app.get("/user/:userID/profile", (req, res) => {
    console.log(req.params);
    console.log(req.params.userID);
    res.send(`Navigated to the user profile page for: ${req.params.userID}.`)
})

app.get("/user/:userID/profile/:data", (req, res) => {
    console.log(req.params);
    res.send(`Navigated to the user profile page for: ${req.params.userID}, with the data ${req.params.data}`);
});

// routes
app.get('/', (req, res) => {
    res.send('this my home route');
})


// this is what keeps our server running and listening for requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})