const {users} = require("../model");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    
    //const email = req.body.regEmail
    //const password= req.body.regPsw
    const {regName,regEmail,regPsw} = req.body
    await users.create({
      name:regName,  
      email: regEmail,
      password:bcrypt.hashSync(regPsw,10) //day4 hashing psw

})
    console.log(regEmail,regPsw,regName)
    //register vayesi without loading login page ma gako
    res.redirect('/login')
}

exports.loginUser = async(req, res) => {
    const {email, password} = req.body
    const userExist = await users.findAll({ //checking data if it is available or not in DB
        where:{
        email: email,
        //password : bcrypt.hashSync(password,10)
        }
    });
    
    if (userExist.length == 0){
        res.render('error.ejs')
    }else{
        const isPasswordCorrect = await bcrypt.compare(password, userExist[0].password)
        if (isPasswordCorrect){
            res.redirect('/index')
        }
        else{
            res.redirect('/login')
        }
    }
    console.log(userExist)
}