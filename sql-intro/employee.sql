-- 1.
SELECT first_name, last_name, city FROM employee WHERE city = 'Calgary';


-- 2.
SELECT MAX(birth_date) FROM employee;
SELECT * FROM employee WHERE birth_date = (SELECT MAX(birth_date) FROM employee);


-- 3.
SELECT MIN(birth_date) FROM employee;
SELECT * FROM employee ORDER BY birth_date LIMIT 1;


-- 4.
SELECT * FROM employee emp 
JOIN employee em 
ON emp.reports_to=em.employee_id 
WHERE em.last_name = 'Edwards' AND em.first_name = 'Nancy';


-- 5.
SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';