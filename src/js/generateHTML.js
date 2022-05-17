function generate(employees){
    for(var i=0; i<employees.length; i++){
        if (employees[i].getRole() ==="Manager"){
  return managerHTML(employees[i])
        }
       if (employees[i].getRole() ==="Intern"){
    return internHTML(employees[i])
        }
        if (employees[i].getRole() ==="Engineer"){
   return engineerHTML(employees[i])
        }
    }
}

function managerHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h1 class="card-title">MANAGER</h1>
    <p class="card-text"> ${ employee.name }</p>
    <p class="card-text"> ${ employee.id }</p>
    <p class="card-text"> ${ employee.email }</p>
  </div>
</div>
    `
}
function internHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h1 class="card-title">INTERN</h1>
    <p class="card-text"> ${ employee.name }</p>
    <p class="card-text"> ${ employee.id }</p>
    <p class="card-text"> ${ employee.email }</p>
    <p class="card-text">${ employee.school }</p>
  </div>
</div>
    `
}
function engineerHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h1 class="card-title">ENGINEER</h1>
    <p class="card-text"> ${ employee.name }</p>
    <p class="card-text"> ${ employee.id }</p>
    <p class="card-text"> ${ employee.email }</p>
    <p class="card-text"> ${ employee.github }</p>
  </div>
</div>
    `
}



module.exports = (employee) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./Main/assets/css/style.css">
      <title>Team Generator</title>
  </head>
  <body>
      ${generate(employee)}
      ${internHTML(employee)}
      ${engineerHTML(employee)}

  </body>
  </html>`;
};
