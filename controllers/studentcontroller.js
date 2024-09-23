const Student = require('../models/Student');

async function addStudent(req, res) {
    try {
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        // res.end("data added sucessfully....");
        console.log("Data Added Succesfully") ;
    } catch(err) {
        console.log(err);
    }
}

async function getStudents(req, res){
    try{
        console.log("Get Student function") ;
        let students = await Student.find({}) ;
        // res.send(students) ;
        res.render("studentList" ,{
            students:students 
        })
    }
    catch(err){
        console.log(err) ;
    }
}

module.exports = {
    addStudent ,
    getStudents
}