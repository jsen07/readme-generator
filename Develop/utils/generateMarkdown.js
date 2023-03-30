// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
this.badge = license;
if (license === "Apache") {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
}
if (license === "IBM") {
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
}
if (license === "Eclipse") {
  return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
}
if (license === "MIT") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
}
else {
  return '';
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
this.link = license;
if (license === "Apache") {
  return `(https://opensource.org/licenses/Apache-2.0)`
}
if (license === "IBM") {
  return `(https://opensource.org/licenses/IPL-1.0)`
}
if (license === "Eclipse") {
  return `(https://opensource.org/licenses/EPL-1.0)`
}
if (license === "MIT") {
  return `(https://opensource.org/licenses/MIT)`
}
else {
  return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  this.license = license;
  if (license !== "No license") {
return `
License: ${this.license}
License link: ${renderLicenseLink(license)}
License badge: ${renderLicenseBadge(license)}`
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}
## License
${renderLicenseSection(data.license)}

## Questions

Link to my github profile: https://github.com/${data.githubUser}

You can reach me on ${data.email}
`;
}
module.exports = generateMarkdown;
