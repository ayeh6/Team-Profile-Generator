const fs = require('fs');

let htmlFileString =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
</head>
<body style="background: #F8F0E3">
    <header style="text-align: center;">
        <h1 style="padding-top: 10px; padding-bottom: 10px; background: blue; color: white;">My Team</h1>
    </header>
    <main class="container" style="display:flex; flex-wrap:wrap;">`;

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

const close = function() {
    htmlFileString += 
    `
    </main>
</body>
</html>`;
    return htmlFileString;
}

const output = function() {
    const output = close();
    fs.writeFile('./dist/index.html', output, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log('Created html file in ./dist/index.html');
    });
}

module.exports = {addMember, output};