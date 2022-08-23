-- 1.
CREATE TABLE PERSON (
	id serial NOT NULL primary key,
	name VARCHAR(100),
    age INT,
	height INTEGER,
    city VARCHAR(100),
	favorite_color VARCHAR(100)
);


-- 2.
INSERT INTO PERSON (name, age, height, city, favorite_color)
VALUES
('John Doe', 31, 183, 'Ottawa', 'blue'),
('Richard Roe', 56, 145, 'Oklahoma City', 'pink'),
('Jane Doe', 45, 166, 'Witchita', 'yellow'),
('Rane Roe', 24, 191, 'Richmond', 'transparent'),
('Joe Biden', 78, 177, 'Washington DC', 'black');


-- 3.
SELECT * FROM PERSON ORDER BY height DESC;


-- 4.
SELECT * FROM PERSON ORDER BY height;


-- 5.
SELECT * FROM PERSON ORDER BY age DESC;


-- 6.
SELECT * FROM PERSON WHERE age > 20;


-- 7.
SELECT * FROM PERSON WHERE age = 18;


-- 8.
SELECT * FROM PERSON WHERE age <20 OR age > 30;


-- 9.
SELECT * FROM PERSON WHERE age != 27;


-- 10.
SELECT * FROM PERSON WHERE NOT favorite_color = 'red';


-- 11.
SELECT * FROM PERSON WHERE NOT favorite_color = 'red' AND NOT favorite_color = 'blue';
SELECT * FROM PERSON WHERE favorite_color NOT IN ('red', 'blue');


-- 12.
SELECT * FROM PERSON WHERE favorite_color IN ('orange', 'green');


-- 13.
SELECT * FROM PERSON WHERE favorite_color IN ('orange', 'green', 'blue');


-- 14.
SELECT * FROM PERSON WHERE favorite_color IN ('yellow', 'purple');
