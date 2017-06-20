var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://ADA_yc:ADAyc@ds161041.mlab.com:61041/ada')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port
var router = express.Router();

var bookController = require('./app/controller/book.js')

var Book = require('./app/model/book.js')

router.get('/', function(req, res) {
	res.json({message: 'Welcome to our Bookstore.' }) 
});

router.route('/books')
.post(bookController.postBook)
.get(bookController.getBook)

router.route('/books/:book_id')
.get(bookController.findBook)
.post(bookController.updateBook)
.delete(bookController.deleteBook)


app.use('/',router)

app.listen(port);
console.log('Magic happens on port ' + port);

