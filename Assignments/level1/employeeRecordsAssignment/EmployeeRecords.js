var employees = [];     //declares employees as a variable and makes it an empyt array.

function Employee(name, jobtitle, salary, status){  //declares Employee function with 4 objects in it.
    this.name = name;               //assigns value of the name parameter to name.
    this.jobtitle = jobtitle;       //assigns value of the jobtitle parameter to jobtitle.
    this.salary = salary;           //assigns value of the salary parameter to salary.
    this.status = status;           //assigns value of the status parameter to status.
    this.printEmployeeForm = console.log(this); //assigns value of console.log(this) to printEmployeeForm. this then allows each item to be displayed in the terminal with only one line of code.
};

var employee1 = new Employee("Bill", "Lawyer", 275000, "full-time"); //assigns the value of new Employee to employee1.
var employee2 = new Employee("Breianne", "Ceo", 395000, "full-time");
var employee3 = new Employee("Melissa", "Web Developer", 180000, "full-time");

var newemployee3 = employee3;       //assigns employee3 to newemployee3.
newemployee3.status = "contract";   //changes the jobs status of employee 3 from full-time to contract.

employees.push(employee1, employee2, employee3); //this pushes the date of each employee to employees empty array.
console.log(employees);  //displays the array in the terminal window.
// console.log(employee1);
// console.log(employee2);
// console.log(employee3);