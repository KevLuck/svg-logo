const { promptUser, generateLogo } = require('./logo/logo.js');

const init = async () => {
  const answers = await promptUser();
  generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
};

init();
