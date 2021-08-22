// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, emailAddress, school){
        super(name, id, emailAddress)
        this.school = school;
        this.title = "intern";

    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

}
module.exports= Intern;

