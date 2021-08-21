// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, emailAddress, officeNumber){
        super(name, id, emailAddress, officeNumber);
            this.title= "Manager";
        }
getOfficeNumber(){
    return this.officeNumber;
}
    }
module.exports = Manager;





// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN