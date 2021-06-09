const User = require('../models/user');
const jwt =require('jsonwebtoken');

module.exports.signup = (req,res) =>{
    User.findOne({email:req.body.email})
    .exec((error,user) => {
    
        if(user) return res.status(400).json({
            message:'user already registerd'
        });
    
        const {
            firstName,
            lastName,
           
            email,
            password} = req.body;
    
    
        const _user= new User({
            firstName,
            lastName,
            email,
            password,
             userName:Math.random().toString()
        });
    
        _user.save((error,data) => {
            if(error){
                console.log(error);
                return res.status(400).json({
                    message:'something went wrong'
                })
            }
            if(data){
                return res.status(201).json({
                    message:'user created successfully'
                })
            }
        });
    
    });
}

module.exports.signin = (req,res) => { 
     User.findOne({email:req.body.email})
    .exec((error,user) => {
if(error) return res.status(400).json({error});
if(user) {
    if(user.authenticate(req.body.password)){
        var token = jwt.sign({ id: user._id }, 'MERNSECRET',{expiresIn: '1h'});
        const {_id,firstName,lastName,email,role,fullName} =user;
        res.status(200).json({
            token,
            user :{
                _id,firstName,lastName,email,role,fullName
            }
        })
    }else{
        res.status(400).json({
            message:'inavild password'
        })
    }

} else{
    return res.status(400).json({message:'something went wrong'});
}
    })

}