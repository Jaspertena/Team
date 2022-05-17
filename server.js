const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const makepage = require("./src/js/generateHTML")



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
        // console.log(manager)
        employee.push(manager)
    })
    .then(function(userInput){
        empPrompt(response.empPrompt)
    })
}

function addEngineer(response) {
    return inquirer.prompt([
        {
            type: "input",
            name: "github", 
            message: "What is your GitHub username?" 
        }
    ])
    .then(function(userInput){
        const engineer = new Engineer(response.name, response.id, response.email, userInput.github)
        console.log(engineer)
        employee.push(engineer)
    })
    .then(function(userInput){
        empPrompt(response.empPrompt)
    })
}

function addIntern(response) {
    return inquirer.prompt([
        {
        type: "input",
        name: "school", 
        message: "What is the name of your school?" 
        }
    ])
    .then(function(userInput){
        const intern = new Intern(response.name, response.id, response.email, userInput.school)
        console.log(intern)
        employee.push(intern)
    })
    .then(function(userInput){
        empPrompt(response.empPrompt)
    })
}
const makeHTML = (employees) => {
    // const makepage = new makepage(res.name, res.id, res.email)
    fs.writeFileSync("./dist/index.html", makepage(employees), console.log('Yay, your HTML has been generated'));
    // console.log(employees)
}

const empPrompt = (response) => {
    return inquirer.prompt([
        {
            type: "confirm", 
            name: "return",
            message: "Do want to add another employee?",
        }
    ])
    .then(function(userInput) {
        // console.log(userInput)
        if (userInput.return){
            promptUser()
        }
        else{makeHTML(employee)}        
    })
}




// makeHTML()



