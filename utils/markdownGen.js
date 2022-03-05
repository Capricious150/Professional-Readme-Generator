// A function to generate markdown for README.
// Uses nested methods to format some of the data in the Shields.IO URL

function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge for ${data.license} license](https://img.shields.io/badge/license-${data.license.replace(/ /gi,"%20")}-${data.color.toLowerCase()})

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

// Exporting the function as an object. Earlier builds of this application included multiple functions
// being exported. Now, it's only one, but by keeping it an object, I didn't need to mess with some syntax
// in index.js
module.exports = { 
  generateMarkdown
}
