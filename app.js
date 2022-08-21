const express = require('express');

// express app
const app = express();

// listen for requets
app.listen(3000);

app.get('/', function(req, res) {
 
   // res.send('<p>home page<p>')
   res.sendFile('./views/index.html', {root: __dirname});

})

app.get('/about', function(req, res) {
 
    //res.send('<p>about page<p>')
    res.sendFile('./views/about.html', {root: __dirname});
})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');   
})

//errors
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});   
})