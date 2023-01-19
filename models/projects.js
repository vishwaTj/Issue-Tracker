const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    ProjectName:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //including the issues as an array
    Issues:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Issue'

        }
    ]
},{
    timestamps:true
})

const Project = mongoose.model('Project',ProjectSchema);
module.exports = Project;