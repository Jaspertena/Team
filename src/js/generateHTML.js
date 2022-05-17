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
    <div class="box">
  <div>
    <h1>MANAGER</h1>
    <p> ${ employee.name }</p>
    <p> ${ employee.id }</p>
    <p> ${ employee.email }</p>
  </div>
</div>
    `
}
function internHTML(employee){
    return`
    <div class="box">
  <div>
    <h1>INTERN</h1>
    <p> ${ employee.name }</p>
    <p> ${ employee.id }</p>
    <p> ${ employee.email }</p>
    <p> ${ employee.school }</p>
  </div>
</div>
    `
}
function engineerHTML(employee){
    return`
  <div>
    <h1>ENGINEER</h1>
    <p> ${ employee.name }</p>
    <p> ${ employee.id }</p>
    <p> ${ employee.email }</p>
    <p> ${ employee.github }</p>
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
      <link rel="stylesheet" href="./scr/css/style.css">
      </head>
  <body>
      ${generate(employee)}
      ${internHTML(employee)}
      ${engineerHTML(employee)}

  </body>
  </html>`;
};
