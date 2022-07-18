const managerQuestions = [
    {
        message: 'Please enter your name:',
        name: 'name',
        type: 'input',
    },
    {
        message: 'Please enter your employee ID:',
        name: 'id',
        type: 'input',
    },
    {
        message: 'Please enter your email address:',
        name: 'email',
        type: 'input',
    },
    {
        message: 'Please enter your office number:',
        name: 'office',
        type: 'input',
    }
];

const engineerQuestions = [
    {
        message: 'Please enter their name:',
        name: 'name',
        type: 'input',
    },
    {
        message: 'Please enter their employee ID:',
        name: 'id',
        type: 'input',
    },
    {
        message: 'Please enter their email address:',
        name: 'email',
        type: 'input',
    },
    {
        message: 'Please enter their Github username:',
        name: 'github',
        type: 'input',
    }
];

const internQuestions = [
    {
        message: 'Please enter their name:',
        name: 'name',
        type: 'input',
    },
    {
        message: 'Please enter their employee ID:',
        name: 'id',
        type: 'input',
    },
    {
        message: 'Please enter their email address:',
        name: 'email',
        type: 'input',
    },
    {
        message: 'Please enter their school:',
        name: 'school',
        type: 'input',
    }
];

const selectEngineerIntern = [
    {
        message: 'Add an engineer or intern?',
        name: 'input',
        type: 'list',
        choices: ['Engineer','Intern','Done'],
    }
];

module.exports = {managerQuestions: managerQuestions, engineerQuestions: engineerQuestions, internQuestions: internQuestions, selectEngineerIntern: selectEngineerIntern};