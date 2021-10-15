// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//An array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Information:",
      },
      {
        type: "input",
        name: "installation",
        message: "Installation Instructions:",
      },
      {
        type: "input",
        name: "contributors",
        message: "Contibutors to the project:",
      },
      {
        type: "input",
        name: "tests",
        message: "Tests for the project:",
      },
      {
        type: "checkbox",
        name: "licence",
        choices: ['MIT','GNU GPLv3','GNU AGPLv3','GNU LGPLv3','Apache License 2.0'],
      },
  ]);
};

/* 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {} */

// A function to write README file
const writeToFile = ({title,description,usage,installation,contributors,tests,licence}) =>
`# ${title}
## ${description}

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${installation}
## Usage
${usage}
## Credits
${contributors}
## License
${licence}`

//A function to initialize app
function init() {
    questions()
    .then((answers)=>fs.writeFileSync('README.md',writeToFile(answers)))
    .then(()=>console.log('Successfully generated README.md'))
    .catch((err)=>console.log(err));
}

// Function call to initialize app
init();
