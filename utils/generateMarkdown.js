// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  } else {
    return `- [License](#license)`;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    return `## License 
This application is covered under the ${license}`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#test)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For questions, reach out at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})`;
}

export default generateMarkdown;
