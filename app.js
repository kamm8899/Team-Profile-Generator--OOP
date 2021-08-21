const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
let employeeArray =[];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const engineerQuestions =
    inquirer
        .prompt([{
                type: "input",
                name: "github",
                message: "What is your github username?",
                validate: github => {
                    if (github) {
                      return true;
                    } else {
                      console.log('Please add a valid github username');
                      return false;
                }
            } 
                },

        ]);

    const managerQuestions =
        inquirer
            .prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "What is your Office Phone number?",
                    validate: officeNumber => {
                        if (officeNumber) {
                          return true;
                        } else {
                          console.log('Please enter valid Phone number?');
                          return false;
                    }
                } 
                    },
            ]);
    
    const internQuesiton =
        inquirer
            .prompt([{
                    type: "input",
                    name: "school",
                    message: "What school do you go to?",
                    validate: school => {
                        if (school) {
                          return true;
                        } else {
                          console.log('Please enter valid school name?');
                          return false;
                    }
                } 
                    }, 
            ]);


const getEmployee = 
inquirer 
    .prompt([{
        type: "input",
        name: "name",
        message: "What is employee's name?"
    },
    {
    type: "input",
    name: "id",
    message: "What is the employee id?",
    validate: id => {
        if (id) {
          return true;
        } else {
          console.log('Please select a valid id');
          return false;
    }
} 
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is employee's email?",
        validate: emailAddress => {
            if (emailAddress) {
              return true;
            } else {
              console.log('Enter your email!!');
              return false;
        }
    }
},
{
    type: "list",
    name: "role",
    message: "What is employee's role?",
    choices:[
        "Engineer",
        "Intern",
        "Manager",
    ],
    },
])
.then(employeeAnswers =>{
    if(employeeAnswers.role === "Engineer"){
        engineerQuestions();
    }else if(employeeAnswers.role === "Manager"){
        managerQuestions();
    }else if(employeeAnswers.role === "Intern"){
        internQuestions();
    }
})


.then(employeeAnswers =>{
    console.log(employeeAnswers);
    if(employeeAnswers.role === "Engineer"){
        const engineer = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.github)
        employeeArray.push(engineer);
    }
    // else if(employeeAnswers.role === "Manager"){
    //     const manager = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.github)
    //     employeeArray.push(employeeAnswers);
    // }else if(employeeAnswers.role === "Intern"){
    //     employeeArray.push(employeeAnswers);
    //}
    member(employeeArray);
});


function member(){
    fs.existsSync(OUTPUT_DIR) || fs.mkdirSync(OUTPUT_DIR);
    fs.writeFileSync(outputPath, render(getEmployee), "UTF-8");
}




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
