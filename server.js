var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
var ejs = require('ejs');

// creating an instance of express app
var app = express();


// we want to serve js and html in ejs
app.set('view engine', 'ejs');
// css, image and others file ocmes under static category
app.use(express.static('views'));
app.set('views', __dirname + '/views');

//firebase admin sdk
var serviceAccount = require('./voting-app-8ed25-firebase-adminsdk-49ppu-ba05b9f84a.json');

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://voting-app-8ed25.firebaseio.com'
});
var database = firebaseAdmin.database();

//give the server access to user input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//logging in the development mode
app.use(logger('dev'));

//middle wares

//middleware for authentication
function isAuthenticated(request,response,next){
//checked if user is logged in
//if they are , attach the user with the request object and call next
// if they are not then send them to the login page
//with a message saying "login"
}

app.get('/', function(request,response){
    var restaurantsRef = database.ref('/restaurants');
     restaurantsRef.once('value', function(snapshot){
         var data = snapshot.val();
         if(!data){
             data={}
         }
         console.log('the data is ', data);

         
         response.render('home.ejs', { restaurants: data});
        })
    
});

app.get('/homecoming-queen', function(request,response){
    response.render('homecomingQueen.ejs')
})
// app.post('/', function(request,response){
   
    
// })
var port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('app running on port ' + port, typeof(app.get))
});