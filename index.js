//importing the needed functions and files 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const genHtml = require('./utils/template');
const Employee = require('./lib/employee');

//empty array to store employees based on user input
const teamMembers = [];

//prompts the user to enter manager information. It used the employee class 
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team manager\'s name? (required)',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your employee id number? (required)',
            name: 'id',
            validate: id => {
                if (isNaN(id)) {
                    console.log('Please enter your employee id');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your email address? (required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your office number? (required)',
            name: 'officeNumber',
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log('Please enter your office number');
                    return false;
                } else {
                    return true
                }
            }
        }
    ])
        .then(managerInput => {
            //use the deconstructing syntax to store values from the object properties into a variable
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamMembers.push(manager);
            console.log(manager);
            promptEmployees();
        })
}

// prompts user for information about the rest of their team members.
const promptEmployees = () => {
    // return inquirer 
    // use a list type to give options for type of employees
    // prompt questions
    // write a conditional for the type of questions to be prompted dependant on the type of employee.
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select the next team member you want to add; if finished, select \'finish building my team\'',
            name: 'teamMembers',
            choices: ['add an engineer to the team', 'add an intern to the team', 'finish building my team'],
        }
    ])
        .then(userChoice => {
            switch (userChoice.teamMembers) {
                case 'add an engineer to the team':
                    promptEngineer();
                    break;
                case 'add an intern to the team':
                    promptIntern();
                    break;
                default:
                    promptBuildTeam();
            }
        })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your engineer\'s name? (required)',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your employee id number? (required)',
            name: 'id',
            validate: id => {
                if (isNaN(id)) {
                    console.log('Please enter your employee id');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your email address? (required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your GitHub username? (required)',
            name: 'github',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        }
    ])
        .then(engineerInput => {
            //use the deconstructing syntax to store values from the object properties into a variable
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            teamMembers.push(engineer);
            console.log('You added an engineer to your team');
            promptEmployees();
        })


}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your interns\'s name? (required)',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your employee id number? (required)',
            name: 'id',
            validate: id => {
                if (isNaN(id)) {
                    console.log('Please enter your employee id');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: 'what is your email address? (required)',
            name: 'email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
        {
            type: 'input',
            message: 'what is your school\'s name? (required)',
            name: 'school',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school\'s name');
                    return false;
                }
            }
        }
    ])
        .then(internInput => {
            //use the deconstructing syntax to store values from the object properties into a variable
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            console.log('You added an intern to the team!');
            promptEmployees();
        })


}

const promptBuildTeam = () => {
console.log('Finished building Team!');
 // creates a new index.html in the dist folder using the genHtml function as a template. 
fs.writeFile(`./dist/index.html`,genHtml(teamMembers), 'utf-8', (err => err ? console.log(err) : console.log('success')));
}



//calls the first function to start the inquirer process
promptManager()
