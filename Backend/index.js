const express= require ("express");
const cors=require('cors')
require("./db/config");
const User=require("./db/User");
const app= express();

const Jwt= require('jsonwebtoken');
const jwtkey='mystore';

app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp)=>{
    let user=new User(req.body);
    let result= await user.save();
    result=result.toObject();
    delete result.password;

    Jwt.sign({result},jwtkey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            resp.send("something went wrong..")
        }
        resp.send({result,auth:token})
    })
})

app.post("/login",async(req,resp)=>{
    console.log(req.body);
    if(req.body.email && req.body.password){
        let user= await User.findOne(req.body).select("-password");
        if(user){
            Jwt.sign({user},jwtkey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    resp.send("something went wrong..")
                }
                resp.send({user,auth:token})
            })
            
        }else{
            resp.send({result:"No result found.."})
        }
    } else{
        resp.send({result:"No result found.."})
    }
})

app.listen(8000);

