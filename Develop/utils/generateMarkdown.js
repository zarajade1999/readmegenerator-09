// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
  


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description
  ${data.description}
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributors](#Contributors)
  * [Test](#tests)
  * [Github and Questions](#Questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is under the ${data.license} license.
  ## Tests
  To run a test, run the following command
  ${data.test}
  ## Contributors
  ${data.contributors}
  ## Questions
  Please enter your github details and email so we can reach you to ask you further questions
 (https://github.com/${data.github}) 
  

`;
}

module.exports = generateMarkdown;
