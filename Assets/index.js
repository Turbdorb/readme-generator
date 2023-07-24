const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GNU', 'BSD'],
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did you work with another user, or get help from an online resource?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readme = generateMarkdown(answers);
        writeToFile('README.md', readme);
    })
}

init();
