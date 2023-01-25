// variable imports employee class 
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole(){
        return 'Manager';
    }
}

// exports manager class
module.exports = Manager