// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// constant for the generateMarkdown.js file
const markdown = require('./utils/markdownGen.js')
console.log(markdown);

const licenseChoices = ["GNU AGPLv3", "GNU GPLv3", "Mozilla Public License 2.0", "MIT", "The Unlicense"]

// Calls the "generateMarkdown" method from constant generateMarkdown

//Not really necessary, but creating a super quick constant for the name of the file to be created 
const readMe = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title.'
    },
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
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project.',
        choices: licenseChoices
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        (err) ? console.log(err) : console.log(`${fileName} created successfully!`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        console.log(markdown.generateMarkdown())
    }
    )
}

// Function call to initialize app
init();
