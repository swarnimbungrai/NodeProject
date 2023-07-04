const express= require ('express')
const app = express();

app.get('/',(req, res) => {
    res.send("hello world hello")
});


app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 