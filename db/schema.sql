DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee_role;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS managers;




CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);


CREATE TABLE employee_role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR (30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL, 
    role_id int,
    department_id int, 
    manager_id int,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employee_role(id) ON DELETE SET NULL
    -- CONSTRAINT fk_manager FOREIGN KEY (mangager_id) REFERENCES department(id) ON DELETE SET NULL
); 

CREATE TABLE managers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    Name VARCHAR (50) NOT NULL,  
    department_id int, 
    CONSTRAINT fk_dp FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
    -- CONSTRAINT fk_manager FOREIGN KEY (mangager_id) REFERENCES department(id) ON DELETE SET NULL
); 

