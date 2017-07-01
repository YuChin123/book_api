var  chai = require('chai');
var chaiHttp = require('chai-http');
var Book = require ('../app/model/book.js')
var should = chai.should();
var server = require ('../server.js')

chai.use(chaiHttp);


describe('Books', function() {
	beforeEach(function(done)  {
		Book.remove({}, function (err)  {
			done();
		});
	});

})


describe('/GET book', function(){
	it('it should GET all the books', function(){
		chai.request(server)
		.get('/books')
		.end(function(err,res){
			res.should.have.status(200)
			res.body.should.be.a('array'); 
			res.body.length.should.be.eql(0)
			.done();
		})
	})
})

