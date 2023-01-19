const Project = require('../models/projects');
const Issue = require('../models/Issues');


// function to create a project
module.exports.CreateProject = function(req,res){
    Project.create({
        ProjectName:req.body.ProjectName,
        author:req.body.author,
        content: req.body.content,
        user:req.user._id
    },function(err,project){
            if(err){
                console.log('error in creating a project+" '+err);
                return;
            }
            return res.redirect('back');
        })
}


// function to render project page and issues
module.exports.ProjectDetails = function(req,res){
    let idone = req.params.id;
    Project.findById(idone)
           .populate({
             path:'Issues'
           })
           .exec(function(err,project){
             if(err){
                console.log("there was an error:"+" "+err);
             }
             return res.render('project',{
                project:project
              })
           })
}


// function to create an issue
module.exports.CreateIssue = function(req,res){
    // console.log(req.body);
    let project_id=req.params.id;
    Project.findById(project_id,function(err,project){
        if(err){
            console.log(`Error in finding project: ${err}`);
        }
        if(project){
            Issue.create({
                name:req.body.name,
                author:req.body.author,
                description:req.body.description,
                label:req.body.label,
                Project:project_id
            },function(err,Issue){
                if(err){
                  console.log(`Error in creating an issue ${err}`);
                }
                project.Issues.push(Issue);
                project.save();
            })
        }
        return res.redirect('back');
    })
}


//  funtion to filter issue based on label and author
module.exports.Filter = function(req,res){
    let idone = req.params.id;
    if(req.body.attribute == 'label'){
      Project.findById(idone)
           .populate({
             path:'Issues',
             match:{
                label:req.body.label
             }
           })
           .exec(function(err,project){
             if(err){
                console.log("there was an error:"+" "+err);
             }
             return res.render('project',{
                project:project
              })
           })
      }else if(req.body.attribute == 'author'){
        Project.findById(idone)
           .populate({
             path:'Issues',
             match:{
                author:req.body.author
             }
           })
           .exec(function(err,project){
             if(err){
                console.log("there was an error:"+" "+err);
             }
             return res.render('project',{
                project:project
              })
           })
      }else{
        return res.redirect('/projects/idone');
      }      

}