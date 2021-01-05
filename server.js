const express = require('express');
const app = express();

const hbs = require('hbs');
// para llamar a los helpers.js
require('./hbs/helpers')


const port = process.env.PORT || 3000;

//esto es para utilizar los archivos html
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//se configura una solicitud get cuando el path sea un slash
app.get('/', (req, res) => {

    res.render('home', {
        anio: new Date().getFullYear()
    });
});
//hay que crear una cada que se pone otra página web
app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puesto ${port}`);
});