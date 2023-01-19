const Project = require('../models/projects');

// funtion to render home page
module.exports.home=function(req,res){
    Project.find({},function(err,projects){
     if(projects){
      return res.render('home',{
          title:'Issue',
          projects:projects
        })
      }
      else{
        return res.render('home',{
            title:'Issue'});
      }   
    })
}