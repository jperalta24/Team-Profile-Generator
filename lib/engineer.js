// variable imports employee class 
const Employee = require('./employee')
// engineer class extends employee 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email,)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}
// exports engineer class
module.exports = Engineer
