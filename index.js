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

// A function to write README file
const writeToFile = ({
  title,
  description,
  usage,
  installation,
  contributors,
  tests,
  github,
  email,
  license,
}) =>
  `# ${title} ${generateLicenseBadge(license[0])}
## Overview
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [E-mail](#e-mail)
- [License](#license)

## Installation
${installation}
## Usage
${usage}
## Contributing
${contributors}
## Tests
${tests}
## Questions
GitHub Profile: [${github}](https://github.com/${github})
## E-mail
${email}
## License
${license}
`;

//A function to initialize app
function init() {
  questions()
    .then((answers) => fs.writeFileSync("README.md", writeToFile(answers)))
    .then(() => console.log("Successfully generated README.md"))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();

// Function to generate license badges

function generateLicenseBadge(licenseType) {
  let licenseString = "";

  if (licenseType === "MIT") {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    console.log(licenseString);
  }
  if (licenseType === "GNU GPLv3") {
    licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    console.log(licenseString);
  }
  if (licenseType === "GNU AGPLv3") {
    licenseString = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    console.log(licenseString);
  }
  if (licenseType === "GNU LGPLv3") {
    licenseString = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    console.log(licenseString);
  }
  if (licenseType === "Apache License 2.0") {
    licenseString = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    console.log(licenseString);
  }
  return licenseString;
}
