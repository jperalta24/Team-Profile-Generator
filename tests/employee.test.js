const Employee = require('../lib/employee');
// created a new employee
const employee = new Employee('Jon', '1234', 'Jon@gmail.com');

// test to see if we can return the values for the new employee object
test('test if we can return the constructor values for the employee object', () => {
    expect(employee.name).toBe('Jon');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('Jon@gmail.com');
});

// test to see if our methods work properly
test('test if we can return the name of employee from the getName() method', () => {
    expect(employee.getName()).toBe('Jon');
});

test('test if we can return the getId() method', () => {
    expect(employee.getId()).toBe('1234');
});

test('test if we can return the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Jon@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});