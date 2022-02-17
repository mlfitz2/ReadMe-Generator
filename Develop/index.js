// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is this project called?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation in building it?'
        },
        {
            type: 'input',
            name: 'problems',
            message: 'What problems does it solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn while building it?'
        },
        {
            type: 'input',
            name: 'standout',
            message: 'What makes this project stand out?'
        },
        {
            type: 'input',
            name: 'techs',
            message: 'What technologies were used in building it?'
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter a link to your screenshot.'
        },
    ]);
};

const generateFile = ({name, motivation, problems, learn, standout, techs, screenshot}) =>
` 
# ${name}

# Motivation in building ${name}:
${motivation}

# Problems solved by ${name}:
${problems}

# Building ${name} taught me:
${learn}

# ${name} stands out because:
${standout}

# Technologies used:
${techs}

Screenshot:
${screenshot}
`;

const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('readmetest.md', generateFile(answers)))
    .then(() => console.log('Your ReadMe file has been generated!'))
    .catch((err) => console.error(err));
}

init();




















// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
