const express= require ('express') //importing express module(framework)
const app = express();

const ejs = require ("ejs");
app.set("view engine", "ejs") //telling node to use ejs
    
const {sequelize} = require ('./model')


app.get('/register',(req, res) => {
   // res.send("<h1>hello i am about page! </h1>")
   res.render('register.ejs');

});
app.get('/login',(req, res) => {
    // res.send("<h1>hello i am about page! </h1>")
    res.render('login.ejs');
 
 });


app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 

