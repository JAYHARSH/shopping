const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
var Schema = mongoose.Schema;

var userSchema= new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:'Full Name cant be empty'
        },
        cart:[{
            product:{type:Schema.Types.ObjectId,ref:'Product'},
            quantity:{type:Number,default:0}
             }],
        email:{
            type:String,
            required:'Email cant be empty',
            unique:true
        },
        password:{
            type:String,
            required:'password cant be empty',
            minlength:[4,'Password must be at leat 4 character long']
        },
        saltSecret: String
        
    }
);


userSchema.pre('register',function(next){
    bcrypt.genSalt((err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
             this.password=hash;
             this.saltSecret=salt;
             next();
        });
    });
});

userSchema.methods.verifyPassword=function(password)
{
 console.log(this.password)
 return password==this.password;
};

userSchema.methods.generateJwt=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
}
mongoose.model('User',userSchema);