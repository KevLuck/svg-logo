const { generateLogo } = require('./shapes.js');
const fs = require('fs');

const tests = [
  {
    text: 'Example',
    textColor: '#000000',
    shape: 'circle',
    shapeColor: '#FF0000',
    expectedSvgMarkup: `
      <svg width="300" height="200">
        <circle cx="50%" cy="50%" r="50%" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `,
  },
  {
    text: 'Example',
    textColor: '#000000',
    shape: 'triangle',
    shapeColor: '#00FF00',
    expectedSvgMarkup: `
      <svg width="300" height="200">
        <polygon points="0,0 100,100 0,100" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `,
  },
  {
    text: 'Example',
    textColor: '#000000',
    shape: 'square',
    shapeColor: '#0000FF',
    expectedSvgMarkup: `
      <svg width="300" height="200">
        <rect width="100" height="100" fill="${shapeColor}" />
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="48">${text}</text>
      </svg>
    `,
  },
];

for (const test of tests) {
  const svgMarkup = await generateLogo(test.text, test.textColor, test.shape, test.shapeColor);
  expect(svgMarkup).toEqual(test.expectedSvgMarkup);
}
