const express= require ('express') //importing express module(framework)
const app = express();

const ejs = require ("ejs");
app.set("view engine", "ejs") //telling node to use ejs
    
const {sequelize, users} = require ('./model')

const bcrypt = require("bcrypt");//day4
const { registerUser, loginUser } = require('./controller/authController');



//shows data in terminal which were filled in form
app.use(express.json())
app.use(express.urlencoded ({extended:true}))


app.get('/register',(req, res) => {
   // res.send("<h1>hello i am about page! </h1>")
   res.render('register.ejs');
});

app.post('/register', registerUser); //day4

app.get('/login',(req, res) => {
    // res.send("<h1>hello i am about page! </h1>")
    res.render('login.ejs');
 });
 app.post('/login', loginUser);


app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 

