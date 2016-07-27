var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//sub documents schemas
//var basicInfo = require('./basicInfo.model');
// var project = require('./project.model');
// var baseWorkEducation = require('./workEducation.model');
// var technicalSkill = require('./skill.model');
// var language = require('./language.model');

var BasicInfoSchema = new Schema({
    type: {
        type: String
    },
    firstName: {
        type: String,
        default: 'dasdasds'
    },
    lastName: {
        type: String,
    },
    jobPosition: {
        type: String,
    }
});
var languages = ['English', 'German', 'Deutch'];

var LanguagesSchema = new Schema({
    languages: {
        type: String,
        enum: languages
    }
});
var ProjectSchema = new Schema({
    type: {
        type: String
    },
    project: {
        title: String,
        description: String,
        myRole: String
    }
});

var skills = ['c#', 'javascript', 'java', '.net'];

var TechnicalSkillsSchema = new Schema({
    skills: {
        type: String,
        enum: skills
    }
});

var WorkEducationSchema = new Schema({
    organization: String,
    title: String,
    description: String,
    from: Date,
    to: Date
});


//MAIN SCHEMA MODEL
var ResumeSchema = new Schema({
    //section basic information
    //firstname,lastname,jobposition
    basic: [BasicInfoSchema],
    //section for workexpirinece
    works: [{
        //base :organization,title,date,description
        base: [WorkEducationSchema],
        //projects:title,description,myrole
        projects: [ProjectSchema]
    }],
    //section education // base :organization,title,date,description
    education: [WorkEducationSchema],
    //section technical skills
    skills: [TechnicalSkillsSchema],
    //section languages
    languages: [LanguagesSchema]
});

var Resume = mongoose.model('Resume', ResumeSchema);

module.exports = Resume;
