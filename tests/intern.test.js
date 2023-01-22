const Intern = require('../lib/intern');

const intern = new Intern('Lucy', '2345', 'Lucy@gmail.com', 'UW');

test('test if we can return the constructor values for intern', () => {
    expect(intern.name).toBe('Lucy');
    expect(intern.id).toBe('2345');
    expect(intern.email).toBe('Lucy@gmail.com');
    expect(intern.school).toBe('UW');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(intern.getName()).toBe('Lucy');
});

test('test if we can return the getId() method', () => {
    expect(intern.getId()).toBe('2345');
});

test('test if we can return the getEmail() method', () => {
    expect(intern.getEmail()).toBe('Lucy@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we can return the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UW')
});
