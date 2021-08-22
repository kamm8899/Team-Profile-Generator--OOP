const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");
const { exit } = require("yargs");
let employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function engineerQuestions(employeeAnswers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please add a valid github username");
            return false;
          }
        },
      },
    ])
    .then((engineerAnswers) => {
      console.log(employeeAnswers);
      console.log(engineerAnswers);
      const engineer = new Engineer(
        employeeAnswers.name,
        employeeAnswers.id,
        employeeAnswers.emailAddress,
        engineerAnswers.github
      );
      employeeArray.push(engineer);
      console.log(employeeArray);
      //go back to the intial prompt
      roleQuestion();
    });
}

    function managerQuestions(employeeAnswers) {
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
            ])
            .then((managerAnswers) => {
                console.log(employeeAnswers);
                console.log(managerAnswers);
                const manager = new Manager(
                  employeeAnswers.name,
                  employeeAnswers.id,
                  employeeAnswers.emailAddress,
                  managerAnswers.officeNumber
                );
                employeeArray.push(manager);
                console.log(employeeArray);
                //go back to the intial prompt
                roleQuestion();
              });
        };

    function internQuestions(employeeAnswers){
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
            ])
            .then((internAnswers) => {
                console.log(employeeAnswers);
                console.log(internAnswers);
                const intern = new Intern(
                  employeeAnswers.name,
                  employeeAnswers.id,
                  employeeAnswers.emailAddress,
                  internAnswers.school
                );
                employeeArray.push(intern);
                console.log(employeeArray);
                //go back to the intial prompt
                roleQuestion();
              });
        };

function getEmployee(roleQuestion) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee id?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please select a valid id");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is employee's email?",
        validate: (emailAddress) => {
          if (emailAddress) {
            return true;
          } else {
            console.log("Enter your email!!");
            return false;
          }
        },
      },
    ])

    .then((employeeAnswers) => {
      console.log(employeeAnswers);
      if (roleQuestion === "Engineer") {
        console.log("running engineer prompt");
        engineerQuestions(employeeAnswers);
      } else if (roleQuestion === "Manager") {
        console.log("running manager");
            managerQuestions(employeeAnswers);
      } else if (roleQuestion === "Intern") {
        console.log("running intern");
        internQuestions(employeeAnswers);
      }
    });
}
function roleQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is employee's role?",
        choices: ["Engineer", "Intern", "Manager", "EXIT"],
      },
    ])
    .then((roleQuestion) => {
      console.log(roleQuestion);
      if (roleQuestion.role === "EXIT") {
        member();
      } else {
        getEmployee(roleQuestion.role);
      }
    });
}

roleQuestion();


//     // else if(employeeAnswers.role === "Manager"){
//     //   const manager = new Manager(employeeAnswer.name, employeeAnswer.id, employeeAnswer.officeNumber, employeeAnswer.emailAddress);
//     //      employeeArray.push(manager);
//     //  }else if(employeeAnswers.role === "Intern"){
//     //      const intern = new Intern(employeeAnswer.name, employeeAnswer.id, employeeAnswer.school,employeeAnswer.emailAddress);
//     //      employeeArray.push(employeeAnswers);
//     // }
//     // member(employeeArray);
// });

function member() {
  fs.existsSync(OUTPUT_DIR) || fs.mkdirSync(OUTPUT_DIR);
  fs.writeFileSync(outputPath, render(getEmployee), "UTF-8");
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


