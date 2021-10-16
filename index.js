// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "checkbox",
      name: "license",
      choices: [
        "MIT",
        "GNU GPLv3",
        "GNU AGPLv3",
        "GNU LGPLv3",
        "Apache License 2.0",
      ],
    },
  ]);
};


//A function to initialize app
function init() {
  questions()
    .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully generated README.md"))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();

// Function to generate license badges

