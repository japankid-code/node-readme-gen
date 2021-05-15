// returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // a badge for that license is added near the top of the README!!
  return `![${license} badge](https://img.shields.io/badge/license-${license}-blue?style=for-the-badge)`
}

function renderLanguageBadge(username, title) {
  return `![language badge](https://img.shields.io/github/languages/top/${username}/${title}?style=for-the-badge)`
}

// returns the license link
function renderLicenseLink(license) {
  lowerLicense = license.toLowerCase();
  return `https://choosealicense.com/licenses/${lowerLicense}/`
}

function renderInstallSteps(installation) {
  // install text input as 'npm install inquirer, npm install jest'
  let installList = installation.split(', ');
  // ['npm install inquirer', 'npm install jest']
  return `\`\`\`bash\n${installList.join('\n')}\n\`\`\``
}

function addScreenshots(screenshots) {
  let screenieList = screenshots.split(', ');
  let screenies = screenieList.map(screenie => {
    return (`![depiction of deployed app](${screenie})`)
  }).join('');
  return screenies
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  switch (license) {
    case 'MIT': {
      return `MIT License

Copyright (c) ${new Date().getFullYear()} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    }
    case 'Unlicense': {
      return `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`
    }
    case 'ISC': {
      return `ISC License

Copyright (c) ${new Date().getFullYear()} ${name}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
    }
  }
}

  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { 
  name,
  repo,
  description,
  installation,
  usage,
  license,
  screenshots,
  contributions,
  tests,
  questions,
  } = data;

  let repoSplit = repo.split('/');
  let title = repoSplit[repoSplit.length - 1];
  let username = repoSplit[repoSplit.length - 2];

  return `# ${title}

${description}. Link to repo is [here](${repo})

${renderLicenseBadge(license)} ${renderLanguageBadge(username, title)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

First of all, install [node](https://nodejs.org/en/).
Here are the list of commands used to get the application working:

${renderInstallSteps(installation)}

## Usage

${usage}
${addScreenshots(screenshots) || `Don't forget to add images!`}

## License

${renderLicenseSection(license, name) || ''}

[link to ${license}](${renderLicenseLink(license)})

## Contributing

${contributions || 'nothing to shout out.'}

## Tests

${tests || 'no testing procedures/coverage.'}

## Questions

email: ${questions}
[Github profile](https://github.com/${username}).

If your project has a lot of features, consider adding a "Features" section.
`;
}

module.exports = { generateMarkdown };
