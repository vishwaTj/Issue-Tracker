const User = require('../models/user');
const Project = require('../models/projects'); 

 // function to sign in to the website
module.exports.signin = function(req,res){
   if(req.isAuthenticated()){
     return res.redirect('/');
   }
   return res.render('user_signin');
}

//sign up for the website
module.exports.signup = function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/');
   }
   return res.render('user_signup');
}


// function to create a user for website
module.exports.create = function(req,res){
   if(req.body.password!=req.body.confirm_password){
      return res.redirect('back');
   }
   else{
      User.findOne({email:req.body.email},function(err,user){
         if(err){
            console.log(`error finding user while signing up: ${err}`);
         }
         if(!user){
            User.create(req.body,function(err,user){
               if(err){
                  console.log('Error in creating user while sign up');
                  return;
               }
               return res.redirect('/users/signin');
            })
         }else{
            return res.redirect('back');
         }
      })
   }

}

// function to create session cookie for user

module.exports.createSession = function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/');
   }
   return res.redirect('back');
}

//to logout of the page
module.exports.destroySession = function(req,res){
   req.logout(function(err){
      if(err){
         return;
      }
   }); // this is a passport function
   return res.redirect('/');
}