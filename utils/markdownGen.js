// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge for ${data.license} license](/assets/images/${data.license}.png)

  ## Description 
  ${data.description}
  
  ## Table of Contents 
  [Installation](#installation)
  
  [Usage](#usage)
  
  [Contributing](#contributing)
  
  [Tests](#tests)
  
  [Questions](#questions)

  [License](#license)
  
  
  ### Installation 
  ${data.installation}
  
  ### Usage 
  ${data.usageInfo}
  
  ### Contributing 
  ${data.contributionGuidelines}
  
  ### Tests 
  ${data.testInstructions}
  
  #### Questions 
  To view my other repositories or see the repo for this proect, [visit my GitHub.](https://github.com/${data.gitHub})
  To contact me with questions, please email me at <${data.email}>

  #### License
  This application is covered under the following license: ${data.license}
`;
}

module.exports = { 
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
