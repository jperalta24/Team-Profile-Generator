const Engineer = require('../lib/engineer');

const engineer = new Engineer('Jocko', '4321', 'jocko@gmail.com', 'jocko24');

test('test if we can return the constructor values for engineer', () => {
    expect(engineer.name).toBe('Jocko');
    expect(engineer.id).toBe('4321');
    expect(engineer.email).toBe('jocko@gmail.com');
    expect(engineer.github).toBe('jocko24');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(engineer.getName()).toBe('Jocko');
});

test('test if we can return the getId() method', () => {
    expect(engineer.getId()).toBe('4321');
});

test('test if we can return the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jocko@gmail.com');
});

test('test if we can return the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test if we can return the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jocko24')
});
