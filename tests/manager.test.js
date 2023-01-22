const Manager = require('../lib/manager');

const manager = new Manager('Jon', '12345', 'jon2@hotmail.com', '12');

test('test if we can return the constructor values for manager', () => {
    expect(manager.name).toBe('Jon');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('jon2@hotmail.com');
    expect(manager.officeNumber).toBe('12');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(manager.getName()).toBe('Jon');
});

test('test if we can return the getId() method', () => {
    expect(manager.getId()).toBe('12345');
});

test('test if we can return the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jon2@hotmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test if we can return the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('12');
});
