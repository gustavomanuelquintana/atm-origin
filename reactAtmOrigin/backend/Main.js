const express       = require('express');
const app           = express();
 const path         = require('path');
 const mysql        = require('mysql');
 const session      = require('express-session');
 const MySQLStore   = require('express-mysql-session')(session);
 const Router       = require('./Router');


 app.use(express.static(path.join(__dirname, 'build')));
 app.use(express.json());


 console.log('Testing server');

 // DATABASE
 const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'atm_originsoftware'
 });

 db.connect(function(err){
     if (err){
        console.log('DB error');
        throw err;
        return false;    
     }
 })

 const sessionStore = new MySQLStore({
     expiration: (1825 * 86400 * 1000),
     endConnectionOnClose: false
 }, db);
 

 app.use(session({
     key: 'sadnaoiwne21i3n321ndlkwqd',
     secret: 'dsada2yuh3u23bn2ojnemd2n',
     store: sessionStore,
     resave: false,
     saveUninitialized: false,
     cookie: {
         maxAge: (1825 * 86400 * 1000),
         httpOnly: false 
     }
 }));

 new Router(app, db);

 app.get('/', function(req,res){
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

 app.listen(3000);