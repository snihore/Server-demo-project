console.log('Hello Node Server');
const express = require('express');
const hbs = require('hbs');

var app = express();

var port = process.env.Port() || 3000;
app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{

    // res.send('Hello MERE User');
    res.send({
        name: 'APKA NAAM',
        age: 'AGE BATAO BHAI',
        gender: 'MALE ho ya FEMALE'

    })

});

app.get('/about', (req, res)=>{
    res.send('<p></p>This is our <strong>about page.</strong></p>');
});

app.get('/type', (req, res)=>{
    res.render('template-1.hbs', {
        name_type: 'Srv123'
    });
});

app.listen(port);