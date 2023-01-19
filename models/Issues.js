const mongoose = require('mongoose');
// const Project = require('./projects');

const IssueSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    },
    Project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    }
},{
    timestamps:true
})

const Issue = mongoose.model('Issue',IssueSchema);
module.exports = Issue;