//Connecting the MYSQL database 
const mysql = require('mysql2');
//Connect to database 
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Superman',
  database: 'employee_tracker'
}, 
console.log('connected to the election databse.')
);

module.exports = db; 