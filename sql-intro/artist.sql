-- 1.
INSERT INTO artist(name)
VALUES 
('Lyube'),
('Oleg Gazmanov'),
('Phillip Kirkorov');


-- 2.
SELECT * FROM artist ORDER BY name DESC LIMIT 10;


-- 3.
SELECT * FROM artist ORDER BY name LIMIT 5;


-- 4.
SELECT name FROM artist WHERE name LIKE 'Black%';


-- 5.
SELECT name FROM artist WHERE name LIKE '%Black%';