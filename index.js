// import and install express
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

// middleware to parse json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'ejs');

// data
const cocktails = require('./data/cocktails.js');

//middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
})

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/search', (req, res) => {
    const cocktailSearch = req.body.cocktailName.toLowerCase();
    const cocktail = cocktails.find(c => c.name.toLowerCase() === cocktailSearch);

    if(cocktail) {
        res.render('cocktail', {cocktail});
    } else {
        res.render('index', {error: 'Error! Cocktail not found.'});
    }
})

// check if server running and listening for requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});