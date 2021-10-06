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
                'update employee manager',
               ]
    }). then( answer => { 
      console.log(answer.choices); 
      if (answer = 'view all employees') { 
        db.query ("SELECT * FROM employee", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      if (answer = 'view all employees by department') { 
        db.query ("SELECT employee.*, department.name AS Department_Name FROM employee LEFT JOIN department ON employee.role_id = department.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      if (answer = 'view all roles within each department') {
        db.query ("SELECT * FROM employee_role LEFT JOIN department ON employee_role.department_id = department.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      if (answer = 'view all employees by roles') {
        db.query ("SELECT employee.*, employee_role.title AS Title FROM employee LEFT JOIN employee_role ON employee.role_id = employee_role.id", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }
      if (answer = 'view all the role ') {
        db.query ("SELECT * FROM employee_role", function (err, res) {
          if (err) 
          throw err 
          console.table(res); 
        })
      }

    })
};

promptUser();

