const inquirer = require('inquirer');
const fs = require('fs');
const userInput = ({title, tableOfContents, description, installation, usage, credits, license, tests, email, username}) =>
`
# ${title}
[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Questions?](#questions)

## Description 
${description}

## Installation 
${installation}

## Usage
${usage}

## Credits 
${credits}

## License 
${license}
## Test
${tests}

## Questions
Any questions about this project? You can reach me here:
* Email: ${email}
* GitHub: ${username} https://github.com/${username}


`

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
    {   type:'input',
        message: 'Add your project title here',
        name:'title',
    },
    {
        type:'input',
        message: 'Add a description of your project here',
        name:'description',
    },
    {
        type:'input',
        message: 'Add instructions to install your project here',
        name:'installation',
    },
    {
        type:'input',
        message: 'Add project instructions and examples of use here',
        name:'usage',
    },
    {
        type:'input',
        message: 'Add any collaborators with links to their GitHub profiles here, enter N/A if not applicable',
        name:'credits',
    },
    {
        type:'checkbox',
        message: 'Choose from this list of common licenses',
        name:'license',
        choices: ['mit']
    },
    {
        type:'input',
        message:'Add any tests you have here, enter N/A if not applicable',
        name:'tests',
    },
    {
        type:'input',
        message:'Add your email here',
        name:'email',
    },
    {
        type:'input',
        message:'Add your GitHub username here',
        name:'username',
    },
    ]
).then((data) => {
    const readMe = `${data.title.toLowerCase().split('').join('')}.md`;
    const content = userInput(data)
    fs.writeFile(readMe,content, (err) =>
    err ? console.log(err) : 
    console.log('Check out your readme!'))
}).catch((error) => {
    console.log(error)
  });