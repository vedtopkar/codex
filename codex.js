let program = require('commander');
let inquirer = require('inquirer');

const config = {
    'name': 'Ved V. Topkar',
    'group': 'Das Lab',
    'initials': 'VVT'
}

let notebooks = ['M2-seq', 'Ribosome', 'Yeast m2-seq'];

function generateFileName(notebook, initials){
    let date = new Date();
    let dateString = date.getFullYear().toString()
                   + ('0' + (date.getMonth()+1)).slice(-2)
                   + ('0' + date.getDate()).slice(-2);
    return dateString + '_' + notebook + '_' + initials + '.md';
}

inquirer
    .prompt([{
        type: 'list',
        name: 'notebook',
        message: 'Which notebook?',
        choices: notebooks,
    }])
    .then(answers => {
        console.log(generateFileName(answers['notebook'], config['initials']));
    });
