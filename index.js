const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('.inquirer');
const fs = require('fs');
const genHtml = require('./utils/template');

const questions = [];
// todo add questions


function makePage(data) {
fs.writeFile(`index.html`, genHtml(data), 'utf8',(err => err ?  console.log(err) : console.log('success')));

}