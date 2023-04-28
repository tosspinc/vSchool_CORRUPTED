const inquirer = require('inquirer');
function main() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'Options',
      message: 'Select an Item from below list',
      choices: ['alligator', 'crocodile', 'Exit'],
    },
  ])
  .then(answers => {
        if (answers.Options == "Exit"){
                process.exit()
        } else {
                console.info('Answer:', answers.Options);
        }
  });
}
if (require.main === module) {
  main();
}