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