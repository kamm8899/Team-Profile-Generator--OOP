// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern{
    constructor(name, id, emailAddress, school){
        super(name, id, emaiAddress)
        this.school = school;
        this.title = "intern";

    }
    getSchool(){
        return this.school;
    }

}
module.exports= Intern;

