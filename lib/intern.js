// variable imports employee class 
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern';
    }
}

// exports intern class
module.exports = Intern