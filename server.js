const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');



const promptUser = () => {
  return inquirer.prompt(
    { 
      type: 'list',
      name: 'choices',
      message: 'What would like to do ? ',
      choices: ['view all employees', 
                'view all employees by department',
                'view all employees by Manager', 
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
    })
};

promptUser();

