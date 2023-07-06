const express= require ('express') //importing express module(framework)
const app = express();

const ejs = require ("ejs");
app.set("view engine", "ejs") //telling node to use ejs
    
const {sequelize, users} = require ('./model')

//shows data in terminal which were filled in form
app.use(express.json())
app.use(express.urlencoded ({extended:true}))


app.get('/register',(req, res) => {
   // res.send("<h1>hello i am about page! </h1>")
   res.render('register.ejs');
});

app.post('/register',async (req, res) => {
    
    //const email = req.body.regEmail
    //const password= req.body.regPsw
    const {regName,regEmail,regPsw} = req.body
    await users.create({
      name:regName,  
      email: regEmail,
      password: regPsw

})
    console.log(regEmail,regPsw,regName)
    res.redirect('/login')
});

app.get('/login',(req, res) => {
    // res.send("<h1>hello i am about page! </h1>")
    res.render('login.ejs');
 
 });


app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 

