const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => value.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ];

  return inquirer.prompt(questions);
}

function generateLogo(answers) {
  let shapeElement;

  switch (answers.shape) {
    case 'circle':
      shapeElement = `<circle cx="50%" cy="50%" r="50%" color="${answers.shapeColor}" />`;
      break;
    case 'triangle':
      shapeElement = `<polygon points="0,0 100,100 0,100" fill="${answers.shapeColor}" />`;
      break;
    case 'square':
      shapeElement = `<rect width="100" height="100" fill="${answers.shapeColor}" />`;
      break;
   
  }

  const svgContent = `
    <svg width="300" height="200">
      ${shapeElement}
      <text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${answers.text}</text>
    </svg>
  `;

  const filePath = path.join('examples', 'logo.svg');
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated ${filePath}`);
}

module.exports = {
  promptUser,
  generateLogo,
};
