// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee{
    //constructor
    constructor(name, id, emailAddress, github){
        super(name, id, emailAddress);
        this.github = github;
        this.title = "Engineer";
    }

//getter for github
getGithub(){
    return this.github;
}

}

module.exports= Engineer;
