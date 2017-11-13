console.log('Server is running')

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan');

app = new express();

//Setup middleware
app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json())

app.post('/register', (req, res, next) => {
    res.send({
        message: `Hello ${req.body.email}! your user was registered!`
    })
});

app.listen(8081);