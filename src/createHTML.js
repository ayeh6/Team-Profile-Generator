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
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="container">`;

const addMemberHTML = function(data) {
    let card =
    `<div class="card">
        <div class="card-header">
            ${data.getName()}<br>${data.getRole()}
        </div>
        <ul class="list-group list-group-flush>
            <li class="list-group-item">ID: ${data.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></li>`
    if(data.getRole() === 'Manager') {
        card += `<li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>`;
    } else if(data.getRole() === 'Engineer') {
        card += `<li class="list-group-item">Github: <a href="https://github.com/${data.getGithub()}" target="_blank">${data.getGithub()}</a></li>`;
    } else if(data.getRole() === 'Intern') {
        card += `<li class="list-group-item">School: ${data.getSchool()} </li>`;
    }
    card +=
    `   </ul>
    </div>`;
    htmlFileString += card;
}

const closeHTML = function() {
    htmlFileString += 
    `</main>
</body>
</html>`;
    return htmlFileString;
}

module.exports = {addMemberHTML, closeHTML};