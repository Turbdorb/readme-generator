function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License](https://img.shields.io/badge/license-MIT-blue.svg)]';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/license-Apache-yellow.svg)]';
    case 'GNU':
      return '[![License](https://img.shields.io/badge/license-GNU-green.svg)]';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/license-BSD-red.svg)]';
    default:
      return '';
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GNU':
      return '(https://opensource.org/licenses-old/gpl-license-html)';
    case 'BSD':
      return '(https://opensource.org/license/bsd-3-clause)';
    default:
      return '';
  }
}


function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This application is covered under the MIT license.';
    case 'Apache':
      return 'This application is covered under the Apache license.';
    case 'GNU':
      return 'This application is covered under the GNU license.';
    case 'BSD':
      return 'This application is covered under the BSD license.';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${renderLicenseBadge(answers.license)}${renderLicenseLink(answers.license)}

${renderLicenseSection(answers.license)}

## Contributing
${answers.credit}

## Tests
${answers.test}

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})

Email: <${answers.email}>
`;
}

module.exports = generateMarkdown;
