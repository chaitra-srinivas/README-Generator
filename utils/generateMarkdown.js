// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === "GNU GPLv3") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license === "GNU AGPLv3") {
    licenseBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
  }
  if (license === "GNU LGPLv3") {
    licenseBadge = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  if (license === "Apache License 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  return licenseBadge;
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU GPLv3") {
    licenseLink = `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "GNU AGPLv3") {
    licenseLink = `[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license === "GNU LGPLv3") {
    licenseLink = `[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  if (license === "Apache License 2.0") {
    licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  return licenseLink;
}

//A function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {}

// A function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}  ${renderLicenseBadge(data.license[0])}

  ## Overview
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [E-mail](#e-mail)
  - [License](#license)

    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contributors}
    ## Tests
    ${data.tests}
    ## Questions
    GitHub Profile: 
    [${data.github}](https://github.com/${data.github})
    ## E-mail
    ${data.email}
    ## License
    ${renderLicenseLink(data.license[0])}`;
  }

module.exports = generateMarkdown;
