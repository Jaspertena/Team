const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee email?"
    },
    {
        type: "list",
        name: "role",
        message: "What role is the employee?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

function promptUser(){
    inquirer.prompt(questions)
    .then(function(response){
        console.log(response)
        if(response.role==="Manager"){
            addManager(response)
        }
        else if(response.role==="Engineer"){
            addEngineer(response)
        }
        else if(response.role==="Intern"){
            addIntern(response)
        }

    })
}

promptUser()

function addManager(response) {}
function addEmployee(response) {}
function addIntern(response) {}