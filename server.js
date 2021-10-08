const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');


console.log( "-----------------------------------------------------"); 
console.log( "------------------EMPLOYEE TRACKER-------------------"); 
console.log( "-----------------------------------------------------"); 
const promptUser = () => {
  return inquirer.prompt(
    { 
      type: 'list',
      name: 'choices',
      message: 'What would like to do ? ',
      choices: ['view all employees', 
                'view all employees by department',
                'view all roles within each department',
                'view all the role',                 
                'view all employees by roles',                 
                'Add employee', 
                'Remove an employee', 
                'update employee role',  
               ]
    }). then( answer => { 
      //console.log(answer.choices); 
      if (answer.choices === 'view all employees') { 
        db.query ("SELECT employee.first_name, employee.last_name, employee_role.salary, employee_role.title FROM employee INNER JOIN employee_role ON employee.role_id = employee_role.id;", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      else if (answer.choices === 'view all employees by department') { 
        db.query ("SELECT employee.*, department.name AS Department_Name FROM employee LEFT JOIN department ON employee.role_id = department.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      else if (answer.choices === 'view all roles within each department') {
        db.query ("SELECT * FROM employee_role LEFT JOIN department ON employee_role.department_id = department.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      else if (answer.choices === 'view all the role ') {
        db.query ("SELECT * FROM employee_role", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      else if (answer.choices === 'view all employees by roles') {
        db.query ("SELECT employee.*, employee_role.title AS Title FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }      
      else if (answer.choices === 'Add employee') {
        add_Employee(); 
      }
      else if (answer.choices === 'Remove an employee') {
        remove_Employee(); 
      }
      else if (answer.choices === 'update employee role') {
        update_Employee(); 
      }
    })
};


// function adding a new employee 
function add_Employee () {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input", 
      message: "Enter the employee first name? "
    },
    {
      name: "last_name",
      type: "input", 
      message: "Enter the employee last name? "
    },
    {
      name: "role_id",
      type: "input", 
      message: "Enter employee role id? "
    },
    {
      name: "department_id",
      type: "input", 
      message: "Enter the employee department id? "
    },
    {
      name: "manager_id",
      type: "input", 
      message: "enter the mangaer's id? "
    }
  ]).then (answer =>  {
    db.query ("INSERT INTO employee SET ?", {
      first_name: answer.first_name,
      last_name: answer.last_name, 
      role_id : answer.rote_id, 
      department_id : answer.department_id, 
      manager_id : answer.manager_id, 
    })
    console.log("you added an employee");
    promptUser();
  }); 
};

function remove_Employee(){ 
  inquirer.prompt([
    {
      name: "id",
      type: "input", 
      message: "enter the id of the employee you want to delete? "
    }
  ]). then (answer => {
    console.log(answer.id); 
    const id = answer.id; 
    db.query("DELETE FROM employee WHERE id = ?", id) 
    console.log ("employee deleted"); 
    promptUser();
  }); 
}; 

function update_Employee(){
  inquirer.prompt([
    {
      name: "id",
      type: "input", 
      message: "enter the id of the employee you want to update the role? "
    }, 
    {
      name: "role_id",
      type: "input", 
      message: "enter the new role id of the employee ?"
    }, 
  ]). then (answer => { 
    const answerArry = [answer.id, answer.role_id] 
    db.query("UPDATE employee SET role_id = ? WHERE id = ?", answerArry) 
    console.log ("employee updated"); 
    promptUser();
  }); 

}

promptUser();

