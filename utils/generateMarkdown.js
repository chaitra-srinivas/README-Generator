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
    licenseSection = `Copyright 2021 Chaitra Srinivasamurthy 
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
  if (license === "GNU GPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU AGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "GNU LGPLv3") {
    licenseSection = `Copyright © 2021 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  }
  if (license === "Apache License 2.0") {
    licenseSection = `Copyright 2021 Chaitra Srinivasamurthy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
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
    ${renderLicenseLink(data.license[0])}
    ${renderLicenseSection(data.license[0])}`;
};

module.exports = generateMarkdown;
