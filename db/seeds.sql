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

INSERT INTO employee (first_name, last_name, role_id, department_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 2, 1, 3),
  ('Virginia', 'Woolf', 1, 2, 4),
  ('Piers', 'Gaveston', 1, 3, 1),
  ('Charles', 'LeRoi', 2, 4, 1),
  ('Katherine', 'Mansfield', 2, 3, 1),
  ('Dora', 'Carrington', 3, 1, 1),
  ('Edward', 'Bellamy', 3, 2, 1),
  ('Montague', 'Summers', 3, 3, 1),
  ('Octavia', 'Butler', 3, 4, 1),
  ('Unica', 'Zurn', 2, 1, 1);

 
