// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// constant for the generateMarkdown.js file
const markdown = require('./utils/markdownGen.js')

// Two arrays which will be used in prompts (See array "questions" and "init()")
const licenseChoices = ["GNU AGPLv3", "GNU GPLv3", "Mozilla Public License 2.0", "MIT", "The Unlicense"]
const colorChoices = ["Red", "Blue", "Green", "Yellow"]


//Not really necessary, but creating a super quick constant for the name of the file to be created 
const readMe = "sample_README.md"

// An array of questions for user input
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
        type: 'list',
        name: 'color',
        message: 'Choose a color for your license badge.',
        choices: colorChoices
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

// A function to write README file
// Uses fs.writeFile to create the file itself, references method markdown.generateMarkdown for the content.
// Check out ./utils/generateMarkdown.js for the actual body that's being sent in. 

function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), (err) => {
        (err) ? console.log(err) : console.log(`${fileName} created successfully!`)
    })
}

// A function to initialize app
// Uses inquirer's prompt method with the question array from above.
// On success, fires off the writeToFile() function above.
// There IS NO CATCH method on this code, so if it fails, it will do so gracelessly. 
// (Luckily, I've yet to see it fail)

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(readMe, data);
    })
}

// Function call to initialize app
init();
