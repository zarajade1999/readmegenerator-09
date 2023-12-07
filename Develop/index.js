// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
const questions = [
  {

  type: 'input',
  message:'Please enter the title of your project',
  name: 'title',
  validate: function (answer) {
    if (answer.length === 0) {
      return console.log("Please submit an answer!");
    }
    return true;
   }

},
{

  type: 'list',
  message:'Please choose a license',
  name: 'license',
  choices: ['MIT', 'Open Source']
  
},
{
  type: 'input',
  message: 'Please enter a description of your README',
  name: 'description',
  validate: function (answerDes) {
    if (answerDes.length === 0) {
      return console.log("Please enter a valid description!");
    }
    return true;
   }
  
}, 
{
  type: 'input',
  message: 'How do i install your product?',
  name: 'installation',
  validate: function (answerInst) {
    if (answerInst.length === 0) {
      return console.log("Please submit an answer!");
    }
    return true;
   }
},
{ type: 'input',
  message: 'How can i test your program?',
  name: 'test',
  validate: function (answerTest) {
    if (answerTest.length === 0) {
      return console.log("Please submit an answer!");
    }
    return true;
   }
    
},
{ type: 'input',
  message: 'Please enter the names of any contributors of this project',
  name: 'contributors',
  validate: function (answerCont) {
    if (answerCont.length === 0) {
      return console.log("Please submit an answer!");
    }
    return true;

   }

},
{
  type: 'input',
  message: 'Please enter your github username,email and provide a link to your github repository so we can reach you and ask any further questions ',
  name: 'github',
  validate: function (answerGit) {
    if (answerGit.length === 0) {
      return console.log("Please submit an answer!");
    }
    return true;

   }
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)  =>
    err ? console.error(err) : console.log('Success!')
  )};


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then ((answer) => {
    writeToFile('README.md', generateMarkdown(answer) ); 
    console.log(answer.title)
   
})
}

// Function call to initialize app
init();



