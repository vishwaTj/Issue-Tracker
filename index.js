const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
app.use('/assets',express.static(__dirname + '/assets'));

// to store the session cookie  so that browser does not have to store it again & again 
const MongoStore = require('connect-mongo');


//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportlocal = require('./config/passport-local-strategy');
// const { session } = require('passport');




app.use(express.urlencoded());
app.use(cookieParser());
// should be kept before views to fill it
app.use(expressLayouts);
//extract styles for subpages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//view engine set up
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name:'issue_tracker',
    // this is the key set for encryption
    secret:'issues_oh_my_god',
    saveUninitialized:false, // to avooid saving data when user does not sign in
    resave:false, // to avoid saving data again and again
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
          mongoUrl: 'mongodb://localhost/Issue_tracker',
          autoremove:'disabled'
        },
        function(err){
            console.log(err || 'connect-mongo setup ok');
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser); // this calls setAuthenticated use func
// and sets requestAnimationFrame.locals.user = req.user in the view func defined in passport local



//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in starting serveree : ${err}`);
    }
    else{
        console.log(`The server is up and running on: ${port}`);
    }
})