// TODO: Include packages needed for this application
const inquirer  = require('inquirer');
const fs  = require('fs');
const generateMarkdown = require ('./utils/generateMarkDown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: 'title'
        },
        {
            type: "input",
            message: "Give a description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "What does the user need to install to use the app?",
            name: "installation"
        },
        {
            type: "input",
            message: "How do you use the app?",
            name: "usage"
        },
        {
            type: "input",
            message: "Has anyone contributed to the project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "How did you test your project?",
            name: "test"
        },
        {
            type: "list",
            message: "Choose a license for your project.",
            choices: ["Apache", "IBM", "Eclipse", "MIT", "No license"],
            name: "license"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "githubUser"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Successfully created file.");
        }
    })
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then(function(data) {
  
    writeToFile("../README.md", generateMarkdown(data));
})
// Function call to initialize app
init();
 
