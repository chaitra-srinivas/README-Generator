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

function renderLicenseSection(license) {
  let licenseSection = "";
  if (!license) {
    return "";
  }
  if (license === "MIT") {
    licenseSection = `This application is covered under the MIT License. \n
    Copyright © 2021 Chaitra Srinivasamurthy.`;
  }
  if (license === "GNU GPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU AGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU LGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/> \n
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "Apache License 2.0") {
    licenseSection = `Licensed under the Apache License, Version 2.0 (the "License"). \n
    Copyright © 2021 Chaitra Srinivasamurthy;
    `;
  }
  return licenseSection;
}

const generateMarkdown = (data) => {
  return `# ${data.title}  ${data.license.map(renderLicenseBadge).join(" ")}

  ## Overview
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
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
    For any questions about the project, please visit my 
    GitHub Profile: 
    [${data.github}](https://github.com/${data.github}) \n
    or reach out to me @ ${data.email}
    ## License
    ${renderLicenseLink(data.license[0])}
    ${renderLicenseSection(data.license[0])}`;
};

module.exports = generateMarkdown;
