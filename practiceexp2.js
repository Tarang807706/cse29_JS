let employees = [];

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = parseFloat(document.getElementById("salary").value);
let dept = document.getElementById("dept").value;

let emp = {
name:name,
id:id,
salary:salary,
dept:dept
};

employees.push(emp);

alert("Employee Added");
}

function displayEmployees(){

let text="";

for(let emp of employees)
{
text += "Name: "+emp.name+
" | ID: "+emp.id+
" | Salary: "+emp.salary+
" | Dept: "+emp.dept+"<br>";
}

document.getElementById("output").innerHTML=text;
}

function filterSalary(){

let result = employees.filter(emp => emp.salary > 50000);

let text="";

for(let emp of result)
{
text += emp.name+" - "+emp.salary+"<br>";
}

document.getElementById("output").innerHTML=text;
}

function totalSalary(){

let total=0;

for(let emp of employees)
{
total += emp.salary;
}

document.getElementById("output").innerHTML="Total Salary = "+total;
}

function averageSalary(){

let total=0;

for(let emp of employees)
{
total += emp.salary;
}

let avg = total/employees.length;

document.getElementById("output").innerHTML="Average Salary = "+avg;
}

function countDepartment(){

let dept = prompt("Enter department name");

let count=0;

for(let emp of employees)
{
if(emp.dept==dept)
count++;
}

document.getElementById("output").innerHTML=
"Employees in "+dept+" = "+count;
}
