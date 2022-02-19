// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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

This project is under the ${license} license.

## Questions

Have any questions? Please send them to ${email}.
This project's code can be viewed at https://github.com/${github}.
`;

module.exports = generateMarkdown;
