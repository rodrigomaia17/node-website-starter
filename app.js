'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;


// For gzip compression
app.use(express.compress());

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
} else {
}

/*
 * Routes
 */
// Index Page
/*app.get('/', function(request, response, next) {
    response.render('index');
});*/

app.use(express.static('public'));
/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
