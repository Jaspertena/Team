const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

let employee = []

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

function addManager(response) { 
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber", 
            message: "What is your office number?"
        }
    ])
    .then(function(userInput){
        const manager = new Manager(response.name, response.id, response.email, userInput.officeNumber)
        console.log(manager)
        emplouyee.push(manager)
    })
}
function addEngineer(response) {}
function addIntern(response) {}