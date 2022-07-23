# Team Profile Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Video Walkthrough](#video-walkthrough)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge of this assignment is to create a node program that takes input from the user using the inquirer package to make a team. That team input is then used to create an html page that displays all the members and their details. Along with using a node program, different types of members have to be created using object oriented programming concepts. Also tests have to be provided to test the objects if they give the right outputs with given inputs.

### User Story

AS A manager  
I WANT to generate a webpage that displays my team's basic info  
SO THAT I have quick access to their emails and GitHub profiles  

### Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I am prompted for my team members and their information  
THEN an HTML file is generated that displays a nicely formatted team roster based on user input  
WHEN I click on an email address in the HTML  
THEN my default email program opens and populates the TO field of the email with the address  
WHEN I click on the GitHub username  
THEN that GitHub profile opens in a new tab  
WHEN I start the application  
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
WHEN I enter the team manager’s name, employee ID, email address, and office number  
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
WHEN I select the engineer option  
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
WHEN I select the intern option  
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
WHEN I decide to finish building my team  
THEN I exit the application, and the HTML is generated  

### Walkthrough Video

- [Video Link](https://drive.google.com/file/d/1n1JMkWpJVD1MCfjmm4rvjd1LzUUicoCX/view?usp=sharing)

### Links

- Github Repo: [Team Profile Generator](https://github.com/ayeh6/Team-Profile-Generator)

## My process

### Built with

- node
- inquirer
- jest
- HTML
- Bootstrap

### What I learned

One thing I learned is when using inquirer, you have to keep in mind of the lambda functions and having to chain them. This is because of the async functionality inquirer does, it will run lines of code after it is called even if the user is not done entering their inputs. This makes the program a bit difficult to make initially since I had to have a function to where I can keep adding different members, therefore calling different inquirer functions based on user input.

I initally started with a while-loop for the inquirer message to select Engineer, Intern or Done inside addMember(), but this is where I discovered the asynchronous behavior of inquirer, so I ended up with an infinite loop. Thinking about chaining lambda functions, I realize a loop was not needed and that I could just call different inquirer functions based on the output. Then once the next inquirer is called and finished, the addEngineer() and addIntern() functions would just call the addMember() function again opening up the prompt to add another user. It will keep going back and fourth until Done is selected, to where a htmlHandler I made is used to create the HTML file.

```js
const addMember = function() {
    //prompt to add either engineer or intern
    inquirer.prompt(questions.selectEngineerIntern).then((answers) => {
        let input = answers.input;
        if(input === 'Engineer') {
            addEngineer();
        } else if(input === 'Intern') {
            addIntern();
        } else if(input === 'Done') {
            htmlHandler.output();
        }
    }).catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in current environment");
            console.log(error.isTtyError);
        } else {
            console.log(error);
        }
    });
}
```

The htmlHandler.js file handles the making of the output html file. Everytime a new member is added, the addMember() function is called inside here with the data from the recent inputs from inquirer. Based on the role, html elements are created with different details and styling and then are appended to the main htmlFileString that holds the whole file. Bootstrap is also used to create the clean look and all the styling is done inline so a separate CSS file isn't needed. Once the user selects Done, output() is called. The output() function calls close() to finish the htmlFileString, closing the rest of the tags. Then fs.writeFile() is called to write a file using the htmlFileString.

```js
const addMember = function(data) {
    let color = '';
    let lastField = '';
    if(data.getRole() === 'Manager') {
        color = 'text-bg-info';
        lastField = `<li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>`;
    } else if(data.getRole() === 'Engineer') {
        color = 'text-bg-danger';
        lastField = `<li class="list-group-item">Github: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a></li>`;
    } else if(data.getRole() === 'Intern') {
        color = 'text-bg-success';
        lastField = `<li class="list-group-item">School: ${data.getSchool()} </li>`;
    }
    let card =
    `
        <div class="card" style="margin:20px;">
            <div class="card-header ${color}">
                ${data.getName()}<br>${data.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></li>
                ${lastField}
            </ul>
        </div>`;
    htmlFileString += card;
}
```

### Continued development

As for continued development, I would consider having a feature that would delete a recent member added if the user were to give incorrect input without having to re-run the program. Also a way to check input would be nice so that the user wouldn't accidentally make those wrong inputs.

### Useful resources

- [Bootstrap](https://getbootstrap.com/) - Bootstrap of course helped a lot with creating the clean look with just adding styling tags to the html elements.

## Author

- Website - [Andrew Yeh](https://ayeh6.github.io/Yeh-Andrew-Portfolio-Website/)
- LinkedIn - [/in/ayeh6](https://www.linkedin.com/in/ayeh6/)