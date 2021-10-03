INSERT INTO department (name)
VALUES
  ('Human Resource'),
  ('IT'),
  ('Marketing'),
  ('Finance');


INSERT INTO employee_role (title, salary, department_id)
VALUES
  ('Manager', 500, '1'),
  ('Manager', 450, '2'),
  ('Admin', 200, '3'),
  ('Finance', 300, '4');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 2, 4),
  ('Virginia', 'Woolf', 1, 4),
  ('Piers', 'Gaveston', 1, 1),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 2, 1),
  ('Dora', 'Carrington', 3, 0),
  ('Edward', 'Bellamy', 3, 0),
  ('Montague', 'Summers', 3, 1),
  ('Octavia', 'Butler', 3, 1),
  ('Unica', 'Zurn', 2, 1);

 
