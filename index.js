// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const path = require('path');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
        validate: titleInput => {
            if  (titleInput) {
                return true;
            } else {
                console.log('Please enter the title !!');
                return false;
            }
        },
      },
      {
          type: 'input',
          name: 'repo',
          message: 'Please provide github link to repo:',
          validate: titleInput => {
              if  (titleInput) {
                  return true;
              } else {
                  console.log('Please enter the link !!');
                  return false;
              }
          },
      },
      {
          type: 'input',
          name: 'description',
          message: 'Briefly describe the app:',
          validate: descriptionInput => {
              if  (descriptionInput) {
                  return true;
              } else {
                  console.log('Please describe the app!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'installation',
          message: 'What commands are needed to get the app working? (use commas)',
          validate: installationInput => {
              if  (installationInput) {
                  return true;
              } else {
                  console.log('Please enter commands used!!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'usage',
          message: 'More detailed info about basic functionality:',
          validate: usageInput => {
              if  (usageInput) {
                  return true;
              } else {
                  console.log('Please enter your input !!');
                  return false;
              }
          }
      },
      {
          type: 'list',
          name: 'license',
          message: 'Which license would you like to use?',
          choices: ['MIT', 'Unlicense', 'ISC']
      },
      {
          type: 'confirm',
          name: 'confirmScreenies',
          message: 'Would you like to add a link to a screenshot?',
          default: false,
      },
          {
              type: 'input',
              name: 'screenshots',
              message: 'URLs, separated by commas:',
              when: ({ confirmScreenies }) => {
                  if (confirmScreenies) {
                  return true;
                  } else {
                  return false;
                  }
              },
          },
      {
          type: 'confirm',
          name: 'confirmContribs',
          message: 'Are there any sources that need attributing?',
          default: false,
      },
          {
              type: 'input',
              name: 'contributions',
              message: 'Links, separated by commas:',
              when: ({ confirmContribs }) => {
                  if (confirmContribs) {
                  return true;
                  } else {
                  return false;
                  }
              },
          },
      {
          type: 'confirm',
          name: 'confirmTests',
          message: 'Were any tests made for the app??',
          default: false,
      },
          {
              type: 'input',
              name: 'tests',
              message: 'Describe testing process:',
              when: ({ confirmTests }) => {
                  if (confirmTests) {
                  return true;
                  } else {
                  return false;
                  }
              },
          },
      {
          type: 'input',
          name: 'questions',
          message: 'Please provide your email for support contact:',
          validate: input => {
              if  (input) {
                  return true;
              } else {
                  console.log('Please enter your input !!');
                  return false;
              }
          }
      },
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownData = generateMarkdown(data);
    fs.writeFile(fileName, markdownData, () => {});
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(readmeData => {
        writeToFile('./dist/README.md', readmeData)
        console.log(`Markdown written to ${path.join(__dirname, './dist/README.md')}`)
    })
    .catch(err => console.log(err));;
  
}

// Function call to initialize app
init();
