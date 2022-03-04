// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const licenseChoices = ["GNU AGPLv3", "GNU GPLv3", "Mozilla Public License 2.0", "MIT", "The Unlicense"]
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions.'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Enter usage information.'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Enter contribution guidelines.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter test instructions.'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your developer email address.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project.',
        choices: licenseChoices
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile("README.md", data)
    
    )
}

// Function call to initialize app
init();
