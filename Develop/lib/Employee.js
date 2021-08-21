// TODO: Write code to define and export the Employee class
const Character = require('.test/Employee.test.js');

class Employee{
    constructor(name, id, emailAddress, officeNumber){
        this.id = id;
        this.emailAddress= emailAddress;
        this.officeNumber = officeNumber;
        this.name = name;
    }

//getter to get name
getName(){
 return this.name;
}

//getter to get email
getEmail(){
    return this.emailAddress;
}

//getter to get id
getID(){
    return this.id;
}

//getter of officeNumber
getOffice(){
    return this.officeNumber;
}

}

module.exports= Employee;

