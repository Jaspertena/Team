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
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    `
}
function internHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    `
}
function engineerHTML(employee){
    return`
    <div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
</div>
    `
}
