function generate(employees){
    for(var i=0; i<employees; i++){
        if (employees[i].getRole() ==="Manager"){
            managerHTML(employees[i])
        }
        if (employees[i].getRole() ==="Intern"){
            internHTML(employee[i])
        }
        if (employees[i].getRole() ==="Engineer"){
            engineerHTML(employee[i])
        }
    }
}

function managerHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">MANAGER</h5>
    <p class="card-text">Manager Details.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    `
}
function internHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">INTERN</h5>
    <p class="card-text">Intern Details</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    `
}
function engineerHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">ENGINEER</h5>
    <p class="card-text">Engineer</p>
    <a href="#" class="btn btn-primary">Button</a>
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
      <title>Document</title>
  </head>
  <body>
      ${generate(employee)}
  </body>
  </html>`;
};
