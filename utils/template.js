//todo
// create a function for each employee
// create a function that for loops over all the employees 
//create an empty array for the employees same function as above
// 

const genManager = (manager) =>{
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


function genHtml(data){
// for loops over all the employees

};

module.exports = genHtml;