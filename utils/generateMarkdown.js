//Render the badge for user's chosen license
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
    } else {
        return '';
    }
}

//Generate ReadMe file
const generateMarkdown = ({name, description, installation, usage, contributing, tests, license, email, github}) =>
` 
# ${name}

${renderLicenseBadge(license)}

Table of Contents:
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License 

License of ${name}: ${license}

## Questions

Have any questions? Please send them to ${email}.
This project's code can be viewed at https://github.com/${github}.
`;

module.exports = generateMarkdown;
