const inquirer = require('inquirer');
const questions = require('./src/questions');
const htmlCreator = require('./src/createHTML');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addManager = function() {
    //add manager prompts
    inquirer.prompt(questions.managerQuestions).then((answers) => {
        //make object
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        htmlCreator.addMemberHTML(manager);
        addMember();
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        }
        else {
            console.log(error);
        }
    });
}

const addEngineer = function() {
    //add engineer prompts
    inquirer.prompt(questions.engineerQuestions).then((answers) => {
        //make object
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        htmlCreator.addMemberHTML(engineer);
        addMember();
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        }
        else {
            console.log(error);
        }
    });
}

const addIntern = function() {
    //add intern prompts
    inquirer.prompt(questions.internQuestions).then((answers) => {
        //make object
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        htmlCreator.addMemberHTML(intern);
        addMember();
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        }
        else {
            console.log(error);
        }
    });
}

const addMember = function() {
    //prompt to add either engineer or intern
    //console.log('here');
    let input = '';
    inquirer.prompt(questions.selectEngineerIntern).then((answers) => {
        input = answers.input;
        console.log(input);
        if(input === 'Engineer') {
            addEngineer();
        } else if(input === 'Intern') {
            addIntern();
        } else if(input === 'Done') {
            outputHTML();
        }
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        }
        else {
            console.log(error);
        }
    });
}

const outputHTML = function() {
    const output = htmlCreator.closeHTML();
    fs.writeFile('./dist/index.html', output, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log('success');
    });
}

const main = function() {
    //main function
    addManager();
}

main();