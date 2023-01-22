const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');
const genHtml = require('./utils/template');
const Employee = require('./lib/employee');

const teamMembers = [];

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
            choices: ['add engineer to the team', 'add an intern to the team', 'finish building my team'],
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
                case 'finish building my team':
                    promptFinishTeam();
                    break;
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
            const { name, id, email, github } = managerInput;
            const engineer = new Engineer(name, id, email, github);
            teamMembers.push(engineer);
            console.log(engineer);
            promptEmployees();
        })


}


function makePage(data) {
    fs.writeFile(`index.html`, genHtml(data), 'utf8', (err => err ? console.log(err) : console.log('success')));

}

promptManager();