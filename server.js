
var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/web-content/' ;

router.use( function ( req, res, next ) {
	next();
});

router.get( '/', function ( req, res ) {
	res.sendFile(path+'index.html');
});

router.get( '/vendor/bootstrap/css/bootstrap.min.css', function ( req, res ) {
	res.sendFile(path+'vendor/bootstrap/css/bootstrap.min.css');
});

router.get( '/vendor/bootstrap/js/bootstrap.min.js', function ( req, res ) {
	res.sendFile(path+'vendor/bootstrap/js/bootstrap.min.js');
});

router.get( '/css/freelancer.min.css', function ( req, res ) {
	res.sendFile(path+'css/freelancer.min.css');
});

router.get( '/js/freelancer.min.js', function ( req, res ) {
	res.sendFile(path+'js/freelancer.min.js');
});

router.get( '/js/freelancer.min.js.map', function ( req, res ) {
	res.sendFile(path+'js/freelancer.min.js.map');
});

router.get( '/vendor/popper/popper.min.js', function ( req, res ) {
	res.sendFile(path+'vendor/popper/popper.min.js');
});

router.get( '/vendor/jquery/jquery.min.js', function ( req, res ) {
	res.sendFile(path+'vendor/jquery/jquery.min.js');
});

router.get( '/vendor/font-awesome/css/font-awesome.min.css', function ( req, res ) {
	res.sendFile(path+'vendor/font-awesome/css/font-awesome.min.css');
});

router.get( '/vendor/font-awesome/fonts/fontawesome-webfont.woff2', function ( req, res ) {
	res.sendFile(path+'vendor/font-awesome/fonts/fontawesome-webfont.woff2');
});

router.get( '/js/contact_me.js', function ( req, res ) {
	res.sendFile(path+'js/contact_me.js');
});

router.get( '/img/profile1.png', function ( req, res ) {
	res.sendFile(path+'img/profile1.png');
});

router.get( '/vendor/jquery-easing/jquery.easing.min.js', function ( req, res ) {
	res.sendFile(path+'vendor/jquery-easing/jquery.easing.min.js');
});

router.get( '/js/jqBootstrapValidation.js', function ( req, res ) {
	res.sendFile(path+'js/jqBootstrapValidation.js');
});

app.use( '/', router );
app.listen(7777,function(){
	console.log("Running 7777");
});