// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const licenses = [
    "None",
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2 Clause 'Simplified' License",
    "BSD 3 Clause 'New' or 'Revised' License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense"
  ];

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions for your project?:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for your project?:',
        choices: licenses
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions, what is your GitHub username?:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions, what is your email address?:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('README.md successfully created')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
