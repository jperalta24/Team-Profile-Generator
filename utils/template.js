//todo
// create a function for each employee
// create a function that for loops over all the employees 
//create an empty array for the employees same function as above
// 

const genManager = (manager) => {
    return `
    <div class="col-4 mt-4">
                    <div class="card text-white bg-dark h-100">
                        <div class="card-header">
                            <h3>${manager.name}</h3>
                            <h4>Manager</h4>
                        </div>
                        <div class="card-body bg-info">
                            <p>ID: ${manager.id}</p>
                            <p>Email: <span id='email'><a href="mailto:${manager.email}">${manager.email}</a></span></p>
                            <p>Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `
}

const genEngineer = (engineer) => {
    return `
    <div class="col-4 mt-4">
                    <div class="card text-white bg-dark h-100">
                        <div class="card-header">
                            <h3>${engineer.name}</h3>
                            <h4>Engineer</h4>
                        </div>
                        <div class="card-body bg-info">
                            <p>ID: ${engineer.id}</p>
                            <p>Email: <span id='email'><a href="mailto:${engineer.email}">${engineer.email}</a></span>
                            </p>
                            <p>GitHub: <span id="github"><a href="https://github.com/${engineer.github}"
                                        target="_blank">${engineer.github}</a> </span></p>
                        </div>
                    </div>
                </div>
    `
}

const genIntern = (intern) => {
    return `
    <div class="col-4 mt-4">
                    <div class="card text-white bg-dark h-100">
                        <div class="card-header">
                            <h3>${intern.name}</h3>
                            <h4>Intern</h4>
                        </div>
                        <div class="card-body bg-info">
                            <p>ID: ${intern.id}</p>
                            <p>Email: <span id='email'><a href="mailto:${intern.email}">${intern.email}</a></span></p>
                            <p>School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
    `
}


function genHtml(data) {
    // for loops over all the employees
    let employeeArr = [];


    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if (role === 'Manager') {
            const manager = genManager(employee)
            employeeArr.push(manager);
        }

        if (role === 'Engineer') {
            const engineer = genEngineer(employee)
            employeeArr.push(engineer);
        }
        
        if (role === 'Intern') {
            const intern = genIntern(employee)
            employeeArr.push(intern);
        }
    }

    const createTeam = employeeArr.join('')

    const newTeam = genPage(createTeam);

    return newTeam;


};


const genPage = (createTeam) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-dark text-light bg-dark d-flex aligns-items-center justify-content-center">
            <h1 class="title text-center">
                Team Profile Generator
            </h1>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${createTeam}
            </div>
        </div>
    </main>
</body>

</html>
    `
};

module.exports = genHtml;